"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PushNotificationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../users/schemas/user.schema");
const devices_service_1 = require("../devices/devices.service");
let PushNotificationsService = PushNotificationsService_1 = class PushNotificationsService {
    userModel;
    devicesService;
    logger = new common_1.Logger(PushNotificationsService_1.name);
    expo;
    ExpoClass;
    constructor(userModel, devicesService) {
        this.userModel = userModel;
        this.devicesService = devicesService;
    }
    async onModuleInit() {
        const { Expo } = await Promise.resolve().then(() => require('expo-server-sdk'));
        this.ExpoClass = Expo;
        this.expo = new Expo();
    }
    async sendToUser(userId, payload) {
        const user = await this.userModel.findById(userId).lean();
        if (!user?.pushTokens?.length) {
            this.logger.debug(`No push tokens for user ${userId}, skipping push`);
            return;
        }
        if (user.pushNotifications === false) {
            this.logger.debug(`User ${userId} has push notifications disabled`);
            return;
        }
        const messages = [];
        for (const { token } of user.pushTokens) {
            if (!this.ExpoClass.isExpoPushToken(token)) {
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
        if (!messages.length)
            return;
        const chunks = this.expo.chunkPushNotifications(messages);
        const invalidTokens = [];
        for (const chunk of chunks) {
            try {
                const tickets = await this.expo.sendPushNotificationsAsync(chunk);
                tickets.forEach((ticket, i) => {
                    if (ticket.status === 'error') {
                        this.logger.error(`Push error: ${ticket.message}`);
                        if (ticket.details?.error === 'DeviceNotRegistered') {
                            invalidTokens.push(chunk[i].to);
                        }
                    }
                });
            }
            catch (err) {
                this.logger.error(`Push chunk failed: ${err.message}`);
            }
        }
        if (invalidTokens.length) {
            await this.devicesService.removeInvalidTokens(invalidTokens);
        }
    }
};
exports.PushNotificationsService = PushNotificationsService;
exports.PushNotificationsService = PushNotificationsService = PushNotificationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        devices_service_1.DevicesService])
], PushNotificationsService);
//# sourceMappingURL=push-notifications.service.js.map