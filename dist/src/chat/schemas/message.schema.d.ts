import { Document, Types } from 'mongoose';
export type MessageDocument = Message & Document;
export declare enum MessageType {
    TEXT = "text",
    IMAGE = "image",
    VIDEO = "video",
    AUDIO = "audio",
    DOCUMENT = "document",
    PROPERTY_CARD = "property_card",
    SYSTEM = "system"
}
export declare enum MessageStatus {
    SENT = "sent",
    DELIVERED = "delivered",
    READ = "read",
    FAILED = "failed"
}
export interface MessageAttachment {
    url: string;
    publicId?: string;
    filename: string;
    size: number;
    mimeType: string;
    thumbnail?: string;
}
export interface PropertyReference {
    propertyId: Types.ObjectId;
    title: string;
    price: number;
    image: string;
    address: string;
    city: string;
}
export declare class Message {
    _id: Types.ObjectId;
    conversationId: Types.ObjectId;
    senderId: Types.ObjectId;
    recipientId: Types.ObjectId;
    type: MessageType;
    content?: string;
    attachments: MessageAttachment[];
    propertyReference?: PropertyReference;
    status: MessageStatus;
    deliveredAt?: Date;
    readAt?: Date;
    isEdited: boolean;
    editedAt?: Date;
    isDeleted: boolean;
    deletedAt?: Date;
    replyTo?: Types.ObjectId;
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const MessageSchema: import("mongoose").Schema<Message, import("mongoose").Model<Message, any, any, any, any, any, Message>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Message, Document<unknown, {}, Message, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conversationId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    senderId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    recipientId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<MessageType, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    attachments?: import("mongoose").SchemaDefinitionProperty<MessageAttachment[], Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyReference?: import("mongoose").SchemaDefinitionProperty<PropertyReference | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<MessageStatus, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deliveredAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    readAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isEdited?: import("mongoose").SchemaDefinitionProperty<boolean, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    editedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isDeleted?: import("mongoose").SchemaDefinitionProperty<boolean, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deletedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    replyTo?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Message, Document<unknown, {}, Message, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Message & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Message>;
