import { Document, Types } from 'mongoose';
export type TagDocument = Tag & Document;
export declare class Tag {
    name: string;
    slug: string;
    description: string;
    usageCount: number;
    isActive: boolean;
}
export declare const TagSchema: import("mongoose").Schema<Tag, import("mongoose").Model<Tag, any, any, any, any, any, Tag>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Tag, Document<unknown, {}, Tag, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Tag & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Tag, Document<unknown, {}, Tag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Tag & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, Tag, Document<unknown, {}, Tag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Tag & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Tag, Document<unknown, {}, Tag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Tag & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    usageCount?: import("mongoose").SchemaDefinitionProperty<number, Tag, Document<unknown, {}, Tag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Tag & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Tag, Document<unknown, {}, Tag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Tag & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Tag>;
