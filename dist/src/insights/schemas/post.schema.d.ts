import { Document, Types } from 'mongoose';
export type PostDocument = Post & Document;
export declare enum PostStatus {
    DRAFT = "draft",
    REVIEW = "review",
    SCHEDULED = "scheduled",
    PUBLISHED = "published",
    ARCHIVED = "archived"
}
export declare enum PostType {
    ARTICLE = "article",
    NEIGHBORHOOD_GUIDE = "neighborhood_guide",
    MARKET_REPORT = "market_report",
    FRAUD_ALERT = "fraud_alert",
    AI_INSIGHT = "ai_insight"
}
export declare class Post {
    title: string;
    slug: string;
    excerpt: string;
    content: Record<string, any>;
    contentText: string;
    author: Types.ObjectId;
    coAuthors: Types.ObjectId[];
    category: Types.ObjectId;
    tags: Types.ObjectId[];
    status: PostStatus;
    postType: PostType;
    coverImage: {
        url: string;
        publicId: string;
        alt: string;
        caption: string;
        width: number;
        height: number;
    };
    seo: {
        metaTitle: string;
        metaDescription: string;
        ogImage: string;
        ogTitle: string;
        ogDescription: string;
        canonicalUrl: string;
        noIndex: boolean;
        structuredData: Record<string, any>;
    };
    relatedListings: Types.ObjectId[];
    neighborhood: {
        name: string;
        city: string;
        country: string;
        coordinates: {
            lat: number;
            lng: number;
        };
    };
    marketData: {
        averagePrice: number;
        priceChange: number;
        demandIndex: number;
        currency: string;
        dataDate: Date;
        source: string;
    };
    publishedAt: Date;
    scheduledAt: Date;
    isFeatured: boolean;
    isTrending: boolean;
    isPinned: boolean;
    isAiGenerated: boolean;
    viewCount: number;
    shareCount: number;
    likeCount: number;
    commentCount: number;
    readingTimeMinutes: number;
    cta: {
        type: 'search_listings' | 'contact_agent' | 'book_tour' | 'newsletter' | 'download_report';
        label: string;
        url: string;
        propertyId: string;
    };
    editorialLog: Array<{
        action: string;
        performedBy: Types.ObjectId | null;
        note: string;
        at: Date;
    }>;
    submittedBy: Types.ObjectId;
    reviewedBy: Types.ObjectId;
    publishedBy: Types.ObjectId;
}
export declare const PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any, any, any, any, Post>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Post, Document<unknown, {}, Post, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    excerpt?: import("mongoose").SchemaDefinitionProperty<string, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contentText?: import("mongoose").SchemaDefinitionProperty<string, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coAuthors?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<PostStatus, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    postType?: import("mongoose").SchemaDefinitionProperty<PostType, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coverImage?: import("mongoose").SchemaDefinitionProperty<{
        url: string;
        publicId: string;
        alt: string;
        caption: string;
        width: number;
        height: number;
    }, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    seo?: import("mongoose").SchemaDefinitionProperty<{
        metaTitle: string;
        metaDescription: string;
        ogImage: string;
        ogTitle: string;
        ogDescription: string;
        canonicalUrl: string;
        noIndex: boolean;
        structuredData: Record<string, any>;
    }, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    relatedListings?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    neighborhood?: import("mongoose").SchemaDefinitionProperty<{
        name: string;
        city: string;
        country: string;
        coordinates: {
            lat: number;
            lng: number;
        };
    }, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    marketData?: import("mongoose").SchemaDefinitionProperty<{
        averagePrice: number;
        priceChange: number;
        demandIndex: number;
        currency: string;
        dataDate: Date;
        source: string;
    }, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    publishedAt?: import("mongoose").SchemaDefinitionProperty<Date, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    scheduledAt?: import("mongoose").SchemaDefinitionProperty<Date, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isFeatured?: import("mongoose").SchemaDefinitionProperty<boolean, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isTrending?: import("mongoose").SchemaDefinitionProperty<boolean, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isPinned?: import("mongoose").SchemaDefinitionProperty<boolean, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isAiGenerated?: import("mongoose").SchemaDefinitionProperty<boolean, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    viewCount?: import("mongoose").SchemaDefinitionProperty<number, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    shareCount?: import("mongoose").SchemaDefinitionProperty<number, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    likeCount?: import("mongoose").SchemaDefinitionProperty<number, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    commentCount?: import("mongoose").SchemaDefinitionProperty<number, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    readingTimeMinutes?: import("mongoose").SchemaDefinitionProperty<number, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cta?: import("mongoose").SchemaDefinitionProperty<{
        type: "search_listings" | "contact_agent" | "book_tour" | "newsletter" | "download_report";
        label: string;
        url: string;
        propertyId: string;
    }, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    editorialLog?: import("mongoose").SchemaDefinitionProperty<{
        action: string;
        performedBy: Types.ObjectId | null;
        note: string;
        at: Date;
    }[], Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    submittedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reviewedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    publishedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Post, Document<unknown, {}, Post, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Post>;
