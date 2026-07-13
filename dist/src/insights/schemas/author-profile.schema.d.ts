import { Document, Types } from 'mongoose';
export type AuthorProfileDocument = AuthorProfile & Document;
export declare enum AuthorRole {
    ADMIN_EDITOR = "admin_editor",
    EDITOR = "editor",
    AGENT_AUTHOR = "agent_author",
    CONTRIBUTOR = "contributor"
}
export declare class AuthorProfile {
    user: Types.ObjectId;
    displayName: string;
    slug: string;
    bio: string;
    avatar: string;
    title: string;
    specialties: string[];
    social: {
        twitter: string;
        linkedin: string;
        website: string;
    };
    role: AuthorRole;
    isActive: boolean;
    publishedPostCount: number;
    totalViewCount: number;
}
export declare const AuthorProfileSchema: import("mongoose").Schema<AuthorProfile, import("mongoose").Model<AuthorProfile, any, any, any, any, any, AuthorProfile>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AuthorProfile, Document<unknown, {}, AuthorProfile, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    user?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    displayName?: import("mongoose").SchemaDefinitionProperty<string, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    avatar?: import("mongoose").SchemaDefinitionProperty<string, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    specialties?: import("mongoose").SchemaDefinitionProperty<string[], AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    social?: import("mongoose").SchemaDefinitionProperty<{
        twitter: string;
        linkedin: string;
        website: string;
    }, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    role?: import("mongoose").SchemaDefinitionProperty<AuthorRole, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    publishedPostCount?: import("mongoose").SchemaDefinitionProperty<number, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalViewCount?: import("mongoose").SchemaDefinitionProperty<number, AuthorProfile, Document<unknown, {}, AuthorProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AuthorProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AuthorProfile>;
