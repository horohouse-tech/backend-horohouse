import { Document, Types } from 'mongoose';
export type BookingDocument = Booking & Document;
export declare enum BookingStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    REJECTED = "rejected",
    NO_SHOW = "no_show"
}
export declare enum PaymentStatus {
    UNPAID = "unpaid",
    PAID = "paid",
    REFUNDED = "refunded",
    PARTIAL = "partial"
}
export declare enum CancellationPolicy {
    FLEXIBLE = "flexible",
    MODERATE = "moderate",
    STRICT = "strict",
    NO_REFUND = "no_refund"
}
export declare enum CancelledBy {
    GUEST = "guest",
    HOST = "host",
    ADMIN = "admin",
    SYSTEM = "system"
}
export interface BookingGuest {
    adults: number;
    children?: number;
    infants?: number;
}
export interface BookingPriceBreakdown {
    pricePerNight: number;
    nights: number;
    subtotal: number;
    cleaningFee: number;
    serviceFee: number;
    taxAmount: number;
    discountAmount: number;
    totalAmount: number;
}
export interface BookingCancellation {
    cancelledBy: CancelledBy;
    cancelledAt: Date;
    reason?: string;
    refundAmount?: number;
    refundStatus?: 'pending' | 'processed' | 'failed';
}
export declare class Booking {
    _id: Types.ObjectId;
    propertyId: Types.ObjectId;
    roomId?: Types.ObjectId;
    guestId: Types.ObjectId;
    hostId: Types.ObjectId;
    checkIn: Date;
    checkOut: Date;
    nights: number;
    guests: BookingGuest;
    priceBreakdown: BookingPriceBreakdown;
    currency: string;
    status: BookingStatus;
    paymentStatus: PaymentStatus;
    paymentReference?: string;
    paymentMethod?: string;
    paidAt?: Date;
    guestNote?: string;
    hostNote?: string;
    isInstantBook: boolean;
    confirmedAt?: Date;
    cancellation?: BookingCancellation;
    actualCheckIn?: Date;
    actualCheckOut?: Date;
    guestReviewLeft: boolean;
    hostReviewLeft: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const BookingSchema: import("mongoose").Schema<Booking, import("mongoose").Model<Booking, any, any, any, any, any, Booking>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Booking, Document<unknown, {}, Booking, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    roomId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    guestId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hostId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    checkIn?: import("mongoose").SchemaDefinitionProperty<Date, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    checkOut?: import("mongoose").SchemaDefinitionProperty<Date, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nights?: import("mongoose").SchemaDefinitionProperty<number, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    guests?: import("mongoose").SchemaDefinitionProperty<BookingGuest, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priceBreakdown?: import("mongoose").SchemaDefinitionProperty<BookingPriceBreakdown, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<string, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<BookingStatus, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentStatus?: import("mongoose").SchemaDefinitionProperty<PaymentStatus, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentReference?: import("mongoose").SchemaDefinitionProperty<string | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentMethod?: import("mongoose").SchemaDefinitionProperty<string | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paidAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    guestNote?: import("mongoose").SchemaDefinitionProperty<string | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hostNote?: import("mongoose").SchemaDefinitionProperty<string | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isInstantBook?: import("mongoose").SchemaDefinitionProperty<boolean, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    confirmedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancellation?: import("mongoose").SchemaDefinitionProperty<BookingCancellation | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    actualCheckIn?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    actualCheckOut?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    guestReviewLeft?: import("mongoose").SchemaDefinitionProperty<boolean, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hostReviewLeft?: import("mongoose").SchemaDefinitionProperty<boolean, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Booking, Document<unknown, {}, Booking, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Booking & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Booking>;
