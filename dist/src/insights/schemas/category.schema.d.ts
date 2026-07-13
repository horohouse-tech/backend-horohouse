import { Document, Types } from 'mongoose';
export type CategoryDocument = Category & Document;
export declare class Category {
    name: string;
    slug: string;
    description: string;
    icon: string;
    coverImage: string;
    accentColor: string;
    metaTitle: string;
    metaDescription: string;
    postCount: number;
    isActive: boolean;
    sortOrder: number;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, any, any, Category>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, Category, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icon?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coverImage?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    accentColor?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metaTitle?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metaDescription?: import("mongoose").SchemaDefinitionProperty<string, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    postCount?: import("mongoose").SchemaDefinitionProperty<number, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sortOrder?: import("mongoose").SchemaDefinitionProperty<number, Category, Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Category>;
