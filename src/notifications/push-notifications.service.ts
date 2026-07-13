import { Injectable, Logger } from '@nestjs/common';
import { Expo, ExpoPushMessage, ExpoPushTicket } from 'expo-server-sdk';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { DevicesService } from '../devices/devices.service';

@Injectable()
export class PushNotificationsService {
  private readonly logger = new Logger(PushNotificationsService.name);
  private expo = new Expo();

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private devicesService: DevicesService,
  ) {}

  async sendToUser(
    userId: string,
    payload: { title: string; body: string; data?: Record<string, any> },
  ): Promise<void> {
    const user = await this.userModel.findById(userId).lean();
    if (!user?.pushTokens?.length) {
      this.logger.debug(`No push tokens for user ${userId}, skipping push`);
      return;
    }
    if (user.pushNotifications === false) {
      this.logger.debug(`User ${userId} has push notifications disabled`);
      return;
    }

    const messages: ExpoPushMessage[] = [];
    for (const { token } of user.pushTokens) {
      if (!Expo.isExpoPushToken(token)) {
        this.logger.warn(`Invalid Expo push token skipped: ${token}`);
        continue;
      }
      messages.push({
        to: token,
        sound: 'default',
        title: payload.title,
        body: payload.body,
        data: payload.data ?? {},
      });
    }

    if (!messages.length) return;

    const chunks = this.expo.chunkPushNotifications(messages);
    const invalidTokens: string[] = [];

    for (const chunk of chunks) {
      try {
        const tickets: ExpoPushTicket[] = await this.expo.sendPushNotificationsAsync(chunk);
        tickets.forEach((ticket, i) => {
          if (ticket.status === 'error') {
            this.logger.error(`Push error: ${ticket.message}`);
            if (ticket.details?.error === 'DeviceNotRegistered') {
              invalidTokens.push(chunk[i].to as string);
            }
          }
        });
      } catch (err) {
        this.logger.error(`Push chunk failed: ${err.message}`);
      }
    }

    if (invalidTokens.length) {
      await this.devicesService.removeInvalidTokens(invalidTokens);
    }
  }
}