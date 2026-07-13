import { Document, Types } from 'mongoose';
export type ComparisonDocument = Comparison & Document;
export declare class Comparison {
    userId: Types.ObjectId;
    name: string;
    propertyIds: Types.ObjectId[];
    isPublic: boolean;
    shareToken?: string;
    viewsCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ComparisonSchema: import("mongoose").Schema<Comparison, import("mongoose").Model<Comparison, any, any, any, any, any, Comparison>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comparison, Document<unknown, {}, Comparison, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyIds?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isPublic?: import("mongoose").SchemaDefinitionProperty<boolean, Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    shareToken?: import("mongoose").SchemaDefinitionProperty<string | undefined, Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    viewsCount?: import("mongoose").SchemaDefinitionProperty<number, Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Comparison, Document<unknown, {}, Comparison, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comparison & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Comparison>;
