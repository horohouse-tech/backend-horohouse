import { Model } from 'mongoose';
import { UserDocument } from '../users/schemas/user.schema';
import { DevicesService } from '../devices/devices.service';
export declare class PushNotificationsService {
    private userModel;
    private devicesService;
    private readonly logger;
    private expo;
    constructor(userModel: Model<UserDocument>, devicesService: DevicesService);
    sendToUser(userId: string, payload: {
        title: string;
        body: string;
        data?: Record<string, any>;
    }): Promise<void>;
}
