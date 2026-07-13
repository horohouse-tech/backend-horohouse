import { Document, Types } from 'mongoose';
export declare enum PostCategory {
    HOMES = "homes",
    CAFE = "cafe",
    EXPLORE = "explore",
    RESOURCES = "resources",
    UPDATES = "updates"
}
export interface AuthorSnapshot {
    name: string;
    initials: string;
    role: string;
    avatar: string;
}
export declare class CommunityPost {
    authorId: Types.ObjectId;
    authorSnapshot: AuthorSnapshot;
    slug: string;
    category: PostCategory;
    title: string;
    excerpt?: string;
    body?: string;
    tags: string[];
    pinned: boolean;
    likes: number;
    likedBy: Types.ObjectId[];
    flaggedBy: Types.ObjectId[];
    views: number;
    replyCount: number;
    replyToId?: Types.ObjectId;
    rootPostId?: Types.ObjectId;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type CommunityPostDocument = CommunityPost & Document;
export declare const CommunityPostSchema: import("mongoose").Schema<CommunityPost, import("mongoose").Model<CommunityPost, any, any, any, any, any, CommunityPost>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CommunityPost, Document<unknown, {}, CommunityPost, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    authorId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    authorSnapshot?: import("mongoose").SchemaDefinitionProperty<AuthorSnapshot, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<PostCategory, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    excerpt?: import("mongoose").SchemaDefinitionProperty<string | undefined, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    body?: import("mongoose").SchemaDefinitionProperty<string | undefined, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pinned?: import("mongoose").SchemaDefinitionProperty<boolean, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    likes?: import("mongoose").SchemaDefinitionProperty<number, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    likedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    flaggedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    views?: import("mongoose").SchemaDefinitionProperty<number, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    replyCount?: import("mongoose").SchemaDefinitionProperty<number, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    replyToId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rootPostId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CommunityPost>;
