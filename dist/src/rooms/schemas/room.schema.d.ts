import { Document, Types } from 'mongoose';
export type RoomDocument = Room & Document;
export declare enum RoomType {
    SINGLE = "single",
    DOUBLE = "double",
    TWIN = "twin",
    SUITE = "suite",
    DORMITORY = "dormitory",
    DELUXE = "deluxe",
    FAMILY = "family",
    PENTHOUSE = "penthouse",
    STUDIO = "studio"
}
export declare enum BedType {
    SINGLE = "single",
    DOUBLE = "double",
    QUEEN = "queen",
    KING = "king",
    BUNK = "bunk",
    SOFA = "sofa_bed"
}
export interface RoomImage {
    url: string;
    publicId: string;
    caption?: string;
}
export interface RoomUnavailableDateRange {
    from: Date;
    to: Date;
    reason?: string;
    source?: string;
}
export declare class Room {
    _id: Types.ObjectId;
    propertyId: Types.ObjectId;
    name: string;
    roomNumber?: string;
    roomType: RoomType;
    maxGuests: number;
    bedCount: number;
    bedType: BedType;
    price?: number;
    cleaningFee?: number;
    amenities: {
        hasWifi?: boolean;
        hasAirConditioning?: boolean;
        hasHeating?: boolean;
        hasTv?: boolean;
        hasBalcony?: boolean;
        hasPrivateBathroom?: boolean;
        hasKitchenette?: boolean;
        hasDesk?: boolean;
        hasSafe?: boolean;
        hasMinibar?: boolean;
        wheelchairAccessible?: boolean;
        selfCheckIn?: boolean;
        checkInTime?: string;
        checkOutTime?: string;
    };
    images: RoomImage[];
    unavailableDates: RoomUnavailableDateRange[];
    icalUrl?: string;
    icalLastSyncedAt?: Date;
    icalSyncedRangesCount: number;
    isActive: boolean;
    bookingsCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const RoomSchema: import("mongoose").Schema<Room, import("mongoose").Model<Room, any, any, any, any, any, Room>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Room, Document<unknown, {}, Room, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    roomNumber?: import("mongoose").SchemaDefinitionProperty<string | undefined, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    roomType?: import("mongoose").SchemaDefinitionProperty<RoomType, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maxGuests?: import("mongoose").SchemaDefinitionProperty<number, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bedCount?: import("mongoose").SchemaDefinitionProperty<number, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bedType?: import("mongoose").SchemaDefinitionProperty<BedType, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number | undefined, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cleaningFee?: import("mongoose").SchemaDefinitionProperty<number | undefined, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amenities?: import("mongoose").SchemaDefinitionProperty<{
        hasWifi?: boolean;
        hasAirConditioning?: boolean;
        hasHeating?: boolean;
        hasTv?: boolean;
        hasBalcony?: boolean;
        hasPrivateBathroom?: boolean;
        hasKitchenette?: boolean;
        hasDesk?: boolean;
        hasSafe?: boolean;
        hasMinibar?: boolean;
        wheelchairAccessible?: boolean;
        selfCheckIn?: boolean;
        checkInTime?: string;
        checkOutTime?: string;
    }, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: import("mongoose").SchemaDefinitionProperty<RoomImage[], Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    unavailableDates?: import("mongoose").SchemaDefinitionProperty<RoomUnavailableDateRange[], Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icalUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icalLastSyncedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icalSyncedRangesCount?: import("mongoose").SchemaDefinitionProperty<number, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bookingsCount?: import("mongoose").SchemaDefinitionProperty<number, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Room, Document<unknown, {}, Room, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Room & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Room>;
