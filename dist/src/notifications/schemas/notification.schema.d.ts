import { Document, Types } from 'mongoose';
export type NotificationDocument = Notification & Document;
export declare enum NotificationType {
    INQUIRY = "inquiry",
    FAVORITE = "favorite",
    PROPERTY_UPDATE = "property_update",
    MESSAGE = "message",
    SYSTEM = "system",
    BOOKING_REQUEST = "booking_request",
    BOOKING_CONFIRMED = "booking_confirmed",
    BOOKING_REJECTED = "booking_rejected",
    BOOKING_CANCELLED = "booking_cancelled",
    BOOKING_REMINDER = "booking_reminder",
    BOOKING_COMPLETED = "booking_completed",
    REVIEW_REQUEST = "review_request",
    REVIEW_RECEIVED = "review_received",
    REVIEW_PUBLISHED = "review_published",
    REVIEW_RESPONSE = "review_response",
    PAYMENT_RECEIVED = "payment_received",
    REFUND_PROCESSED = "refund_processed"
}
export declare class Notification {
    userId: Types.ObjectId;
    type: NotificationType;
    title: string;
    message: string;
    read: boolean;
    link?: string;
    metadata?: {
        propertyId?: string;
        inquiryId?: string;
        senderId?: string;
        bookingId?: string;
        reviewId?: string;
        checkIn?: string;
        checkOut?: string;
        guestName?: string;
        hostName?: string;
        propertyTitle?: string;
        amount?: number;
        currency?: string;
        [key: string]: any;
    };
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const NotificationSchema: import("mongoose").Schema<Notification, import("mongoose").Model<Notification, any, any, any, any, any, Notification>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Notification, Document<unknown, {}, Notification, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<NotificationType, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    message?: import("mongoose").SchemaDefinitionProperty<string, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    read?: import("mongoose").SchemaDefinitionProperty<boolean, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    link?: import("mongoose").SchemaDefinitionProperty<string | undefined, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<{
        [key: string]: any;
        propertyId?: string;
        inquiryId?: string;
        senderId?: string;
        bookingId?: string;
        reviewId?: string;
        checkIn?: string;
        checkOut?: string;
        guestName?: string;
        hostName?: string;
        propertyTitle?: string;
        amount?: number;
        currency?: string;
    } | undefined, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Notification, Document<unknown, {}, Notification, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Notification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Notification>;
