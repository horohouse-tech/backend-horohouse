import { Document, Types } from 'mongoose';
export type ConversationDocument = Conversation & Document;
export interface ParticipantInfo {
    userId: Types.ObjectId;
    unreadCount: number;
    lastReadAt?: Date;
    mutedUntil?: Date;
    joinedAt: Date;
}
export interface LastMessage {
    content: string;
    senderId: Types.ObjectId;
    createdAt: Date;
    type: string;
}
export declare class Conversation {
    _id: Types.ObjectId;
    participants: ParticipantInfo[];
    propertyId?: Types.ObjectId;
    lastMessage?: LastMessage;
    messagesCount: number;
    typingUsers: Map<string, boolean>;
    onlineStatus: Map<string, string>;
    isArchived: boolean;
    archivedAt?: Date;
    archivedBy: Types.ObjectId[];
    isBlocked: boolean;
    blockedBy?: Types.ObjectId;
    blockedAt?: Date;
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ConversationSchema: import("mongoose").Schema<Conversation, import("mongoose").Model<Conversation, any, any, any, any, any, Conversation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Conversation, Document<unknown, {}, Conversation, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    participants?: import("mongoose").SchemaDefinitionProperty<ParticipantInfo[], Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastMessage?: import("mongoose").SchemaDefinitionProperty<LastMessage | undefined, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    messagesCount?: import("mongoose").SchemaDefinitionProperty<number, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    typingUsers?: import("mongoose").SchemaDefinitionProperty<Map<string, boolean>, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    onlineStatus?: import("mongoose").SchemaDefinitionProperty<Map<string, string>, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isArchived?: import("mongoose").SchemaDefinitionProperty<boolean, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    archivedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    archivedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isBlocked?: import("mongoose").SchemaDefinitionProperty<boolean, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    blockedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    blockedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Conversation, Document<unknown, {}, Conversation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conversation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Conversation>;
