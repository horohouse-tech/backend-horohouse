import { Document, Types } from 'mongoose';
export type CallDocument = Call & Document;
export declare enum CallType {
    AUDIO = "audio",
    VIDEO = "video"
}
export declare enum CallStatus {
    INITIATING = "initiating",
    RINGING = "ringing",
    CONNECTING = "connecting",
    CONNECTED = "connected",
    ENDED = "ended",
    DECLINED = "declined",
    MISSED = "missed",
    FAILED = "failed",
    CANCELLED = "cancelled"
}
export declare enum CallEndReason {
    COMPLETED = "completed",
    DECLINED = "declined",
    MISSED = "missed",
    CANCELLED = "cancelled",
    FAILED = "failed",
    BUSY = "busy",
    NO_ANSWER = "no_answer"
}
export interface CallParticipant {
    userId: Types.ObjectId;
    joinedAt?: Date;
    leftAt?: Date;
    status: 'joining' | 'connected' | 'disconnected';
}
export declare class Call {
    _id: Types.ObjectId;
    conversationId: Types.ObjectId;
    initiatorId: Types.ObjectId;
    recipientId: Types.ObjectId;
    type: CallType;
    status: CallStatus;
    participants: CallParticipant[];
    startedAt?: Date;
    endedAt?: Date;
    duration: number;
    endReason?: CallEndReason;
    quality?: {
        audioQuality: number;
        videoQuality: number;
        networkIssues: number;
    };
    metadata?: {
        iceServers?: any[];
        sdp?: any;
        candidates?: any[];
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const CallSchema: import("mongoose").Schema<Call, import("mongoose").Model<Call, any, any, any, any, any, Call>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Call, Document<unknown, {}, Call, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conversationId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    initiatorId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    recipientId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<CallType, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<CallStatus, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    participants?: import("mongoose").SchemaDefinitionProperty<CallParticipant[], Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    startedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duration?: import("mongoose").SchemaDefinitionProperty<number, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endReason?: import("mongoose").SchemaDefinitionProperty<CallEndReason | undefined, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    quality?: import("mongoose").SchemaDefinitionProperty<{
        audioQuality: number;
        videoQuality: number;
        networkIssues: number;
    } | undefined, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<{
        iceServers?: any[];
        sdp?: any;
        candidates?: any[];
    } | undefined, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Call & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Call>;
