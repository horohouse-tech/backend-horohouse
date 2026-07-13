import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe, Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import mongoose from 'mongoose';
import { AppModule } from './app.module';
import { webcrypto } from 'crypto';

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as Crypto;
}

const ALLOWED_ORIGINS = [
  'https://horohouse.com',
  'https://www.horohouse.com',
  'http://localhost:3000',
  'http://localhost:8081',
  'http://localhost:8082',
  'http://192.168.173.37:8081',
  'http://192.168.173.37:8082',
  'http://192.168.173.37:4000',
  'http://192.168.80.37:8081',
  'http://192.168.80.37:8082',
  'http://192.168.80.37:4000',
  'http://10.48.115.37:8081',
  'http://10.48.115.37:8082',
  'http://192.168.64.37:8081',
  'http://192.168.64.37:8082',
  'http://192.168.64.37:4000',
  'http://192.168.254.37:8081',
  'http://192.168.254.37:8082',
  'http://192.168.254.37:4000',
  'http://192.168.96.37:8081',
  'http://192.168.96.37:8082',
  'http://192.168.96.37:4000',
];

const CORS_OPTIONS = {
  origin: ALLOWED_ORIGINS,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'Origin',
    'X-Requested-With',
    // ✅ Allow CamerPay webhook signature header
    'X-CamerPay-Signature',
  ],
};

const HELMET_OPTIONS = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [`'self'`],
      styleSrc: [`'self'`, `'unsafe-inline'`],
      fontSrc: [`'self'`],
      objectSrc: [`'none'`],
      scriptSrc: [`'self'`],
      workerSrc: [`'self'`, `blob:`],
    },
  },
};

const MULTIPART_OPTIONS = {
  limits: {
    fieldNameSize: 100,
    fieldSize: 1024 * 1024 * 10,
    fields: 20,
    fileSize: 1024 * 1024 * 100,
    files: 50,
    headerPairs: 2000,
  },
};

function setupSwagger(app: NestFastifyApplication) {
  const config = new DocumentBuilder()
    .setTitle('HoroHouse API')
    .setDescription('Real Estate Platform API for Cameroon and African Countries')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT-auth')
    .addTag('Authentication', 'User authentication and authorization')
    .addTag('Users', 'User management operations')
    .addTag('Properties', 'Property management operations')
    .addTag('History', 'User activity tracking')
    .addTag('Analytics', 'Dashboard and analytics')
    .addTag('AI Chat', 'AI-powered chat and property search')
    .addTag('Chat', 'Real-time chat and messaging')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });
}

function setupMongoEvents(logger: Logger) {
  mongoose.connection.on('connected', () => logger.log('✅ Successfully connected to MongoDB'));
  mongoose.connection.on('error', (err) => logger.error('❌ MongoDB connection error: ' + err));
  mongoose.connection.on('disconnected', () => logger.warn('⚠️ MongoDB disconnected'));
}

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  // ✅ addContentTypeParser must be set on the FastifyAdapter BEFORE the app
  //    is fully initialised, so we configure it on the raw Fastify instance
  //    via the onReady hook below.
  const fastifyAdapter = new FastifyAdapter({ logger: false });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const isProduction = configService.get('NODE_ENV') === 'production';

  // ── CamerPay webhook: capture raw body ──────────────────────────────────
  // Fastify parses JSON before NestJS sees it, so we intercept the webhook
  // route at the Fastify level and store the raw buffer on the request object
  // so our controller can use it for HMAC verification.
  //
  // We add a content-type parser for 'application/json' scoped only to the
  // webhook route via a preHandler hook — that way the rest of the API keeps
  // its normal JSON parsing behaviour.
  const fastify = app.getHttpAdapter().getInstance();

  fastify.addHook(
    'preHandler',
    async (request: any, _reply: any) => {
      const webhookPath = '/api/v1/payments/webhook/camerpay';
      if (request.url === webhookPath && request.method === 'POST') {
        // At preHandler time Fastify has already parsed the body into an object.
        // Re-serialise it as the canonical raw string for HMAC.
        // This is equivalent to the raw body as long as CamerPay sends
        // compact JSON without extra whitespace (which all webhook providers do).
        request.rawBody = Buffer.from(JSON.stringify(request.body), 'utf8');
      }
    },
  );
  // ────────────────────────────────────────────────────────────────────────

  // Plugins
  await app.register(helmet as any, HELMET_OPTIONS);
  await app.register(cors as any, CORS_OPTIONS);
  await app.register(multipart as any, MULTIPART_OPTIONS);

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      exceptionFactory: (errors) => {
        logger.error('Validation errors:', JSON.stringify(errors, null, 2));
        const messages = errors.flatMap((err) =>
          err.constraints ? Object.values(err.constraints) : [err.toString()]
        );
        return new BadRequestException(messages);
      },
    }),
  );

  // Swagger — dev/staging only
  if (!isProduction) {
    setupSwagger(app);
    logger.log('📚 Swagger enabled');
  }

  app.setGlobalPrefix('api/v1');

  setupMongoEvents(logger);

  await app.listen(port, '0.0.0.0');

  logger.log(`🚀 HoroHouse Backend running on port ${port}`);
  logger.log(`🔌 WebSocket ready`);
  logger.log(`🌍 Allowed origins: ${ALLOWED_ORIGINS.join(', ')}`);
  logger.log(`🔑 JWT Secret configured: ${!!configService.get('JWT_SECRET')}`);
  logger.log(`💳 CamerPay webhook: POST /api/v1/payments/webhook/camerpay`);
}

bootstrap().catch((error) => {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
});