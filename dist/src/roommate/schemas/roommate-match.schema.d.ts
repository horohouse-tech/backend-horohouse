import { Document, Types } from 'mongoose';
import { MatchStatus } from './roommate-profile.schema';
export type RoommateMatchDocument = RoommateMatch & Document;
export declare class RoommateMatch {
    initiatorId: Types.ObjectId;
    receiverId: Types.ObjectId;
    initiatorProfileId: Types.ObjectId;
    receiverProfileId: Types.ObjectId;
    status: MatchStatus;
    compatibilityScore: number;
    chatRoomId?: Types.ObjectId;
    matchedAt?: Date;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const RoommateMatchSchema: import("mongoose").Schema<RoommateMatch, import("mongoose").Model<RoommateMatch, any, any, any, any, any, RoommateMatch>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoommateMatch, Document<unknown, {}, RoommateMatch, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    initiatorId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    receiverId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    initiatorProfileId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    receiverProfileId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<MatchStatus, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    compatibilityScore?: import("mongoose").SchemaDefinitionProperty<number, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    chatRoomId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    matchedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    expiresAt?: import("mongoose").SchemaDefinitionProperty<Date, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, RoommateMatch, Document<unknown, {}, RoommateMatch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateMatch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, RoommateMatch>;
