import { Document, Types } from 'mongoose';
export type LeadActivityDocument = LeadActivity & Document;
export declare class LeadActivity {
    userId: Types.ObjectId;
    sessionId: string;
    activityType: string;
    description?: string;
    metadata?: {
        propertyId?: string;
        propertyType?: string;
        city?: string;
        price?: number;
        filters?: Record<string, any>;
        message?: string;
        duration?: number;
        confidence?: number;
        [key: string]: any;
    };
    impactScore?: number;
    timestamp: Date;
    source?: string;
}
export declare const LeadActivitySchema: import("mongoose").Schema<LeadActivity, import("mongoose").Model<LeadActivity, any, any, any, any, any, LeadActivity>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LeadActivity, Document<unknown, {}, LeadActivity, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sessionId?: import("mongoose").SchemaDefinitionProperty<string, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    activityType?: import("mongoose").SchemaDefinitionProperty<string, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<{
        [key: string]: any;
        propertyId?: string;
        propertyType?: string;
        city?: string;
        price?: number;
        filters?: Record<string, any>;
        message?: string;
        duration?: number;
        confidence?: number;
    } | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    impactScore?: import("mongoose").SchemaDefinitionProperty<number | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timestamp?: import("mongoose").SchemaDefinitionProperty<Date, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    source?: import("mongoose").SchemaDefinitionProperty<string | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, LeadActivity>;
export type ChatAnalyticsDocument = ChatAnalytics & Document;
export declare class ChatAnalytics {
    date: Date;
    period: string;
    totalSessions: number;
    totalMessages: number;
    uniqueUsers: number;
    guestSessions: number;
    authenticatedSessions: number;
    leadDistribution: {
        hot?: number;
        warm?: number;
        cold?: number;
    };
    conversions: number;
    conversionTypes?: Record<string, number>;
    avgMessagesPerSession?: number;
    avgSessionDuration?: number;
    avgResponseTime?: number;
    topCities?: Record<string, number>;
    topPropertyTypes?: Record<string, number>;
    priceRanges?: Record<string, number>;
    topKeywords: string[];
    propertiesShown: number;
    propertiesViewed: number;
    propertiesSaved: number;
    engagementRate?: number;
    bounceRate?: number;
    languageDistribution?: Record<string, number>;
    deviceDistribution?: Record<string, number>;
    customMetrics?: Record<string, any>;
}
export declare const ChatAnalyticsSchema: import("mongoose").Schema<ChatAnalytics, import("mongoose").Model<ChatAnalytics, any, any, any, any, any, ChatAnalytics>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    date?: import("mongoose").SchemaDefinitionProperty<Date, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    period?: import("mongoose").SchemaDefinitionProperty<string, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalSessions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalMessages?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    uniqueUsers?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    guestSessions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    authenticatedSessions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    leadDistribution?: import("mongoose").SchemaDefinitionProperty<{
        hot?: number;
        warm?: number;
        cold?: number;
    }, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conversions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conversionTypes?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    avgMessagesPerSession?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    avgSessionDuration?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    avgResponseTime?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    topCities?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    topPropertyTypes?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priceRanges?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    topKeywords?: import("mongoose").SchemaDefinitionProperty<string[], ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesShown?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesViewed?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesSaved?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    engagementRate?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bounceRate?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    languageDistribution?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deviceDistribution?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customMetrics?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ChatAnalytics>;
export type ConversationSummaryDocument = ConversationSummary & Document;
export declare class ConversationSummary {
    sessionId: string;
    userId?: Types.ObjectId;
    summary: string;
    keyPoints: string[];
    userIntent?: {
        primary?: string;
        secondary?: string[];
        confidence?: number;
    };
    requirements?: {
        propertyType?: string;
        location?: string;
        budget?: {
            min?: number;
            max?: number;
        };
        bedrooms?: number;
        bathrooms?: number;
        mustHaves?: string[];
        niceToHaves?: string[];
    };
    userCategory: string;
    intentClarityScore?: number;
    recommendedAction?: string;
    tags: string[];
    generationType: string;
    lastUpdated: Date;
    sentiment?: {
        overall?: string;
        confidence?: number;
        keywords?: string[];
    };
}
export declare const ConversationSummarySchema: import("mongoose").Schema<ConversationSummary, import("mongoose").Model<ConversationSummary, any, any, any, any, any, ConversationSummary>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ConversationSummary, Document<unknown, {}, ConversationSummary, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    sessionId?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    summary?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    keyPoints?: import("mongoose").SchemaDefinitionProperty<string[], ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userIntent?: import("mongoose").SchemaDefinitionProperty<{
        primary?: string;
        secondary?: string[];
        confidence?: number;
    } | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    requirements?: import("mongoose").SchemaDefinitionProperty<{
        propertyType?: string;
        location?: string;
        budget?: {
            min?: number;
            max?: number;
        };
        bedrooms?: number;
        bathrooms?: number;
        mustHaves?: string[];
        niceToHaves?: string[];
    } | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userCategory?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    intentClarityScore?: import("mongoose").SchemaDefinitionProperty<number | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    recommendedAction?: import("mongoose").SchemaDefinitionProperty<string | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    generationType?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastUpdated?: import("mongoose").SchemaDefinitionProperty<Date, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sentiment?: import("mongoose").SchemaDefinitionProperty<{
        overall?: string;
        confidence?: number;
        keywords?: string[];
    } | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ConversationSummary>;
export type SavedSearchDocument = SavedSearch & Document;
export declare class SavedSearch {
    userId: Types.ObjectId;
    sessionId?: string;
    name: string;
    filters: {
        propertyType?: string;
        listingType?: string;
        city?: string;
        neighborhood?: string;
        minPrice?: number;
        maxPrice?: number;
        bedrooms?: number;
        bathrooms?: number;
        minArea?: number;
        maxArea?: number;
        furnished?: boolean;
        amenities?: string[];
        [key: string]: any;
    };
    isActive: boolean;
    notificationsEnabled: boolean;
    notificationFrequency: string;
    lastNotifiedAt?: Date;
    matchCount: number;
    lastMatchAt?: Date;
    source: string;
    metadata?: {
        originalQuery?: string;
        confidence?: number;
        [key: string]: any;
    };
}
export declare const SavedSearchSchema: import("mongoose").Schema<SavedSearch, import("mongoose").Model<SavedSearch, any, any, any, any, any, SavedSearch>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SavedSearch, Document<unknown, {}, SavedSearch, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sessionId?: import("mongoose").SchemaDefinitionProperty<string | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    filters?: import("mongoose").SchemaDefinitionProperty<{
        [key: string]: any;
        propertyType?: string;
        listingType?: string;
        city?: string;
        neighborhood?: string;
        minPrice?: number;
        maxPrice?: number;
        bedrooms?: number;
        bathrooms?: number;
        minArea?: number;
        maxArea?: number;
        furnished?: boolean;
        amenities?: string[];
    }, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notificationsEnabled?: import("mongoose").SchemaDefinitionProperty<boolean, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notificationFrequency?: import("mongoose").SchemaDefinitionProperty<string, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastNotifiedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    matchCount?: import("mongoose").SchemaDefinitionProperty<number, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastMatchAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    source?: import("mongoose").SchemaDefinitionProperty<string, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<{
        [key: string]: any;
        originalQuery?: string;
        confidence?: number;
    } | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SavedSearch>;
export declare const schemas: ({
    name: string;
    schema: import("mongoose").Schema<LeadActivity, import("mongoose").Model<LeadActivity, any, any, any, any, any, LeadActivity>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LeadActivity, Document<unknown, {}, LeadActivity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }, {
        userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        sessionId?: import("mongoose").SchemaDefinitionProperty<string, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        activityType?: import("mongoose").SchemaDefinitionProperty<string, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        description?: import("mongoose").SchemaDefinitionProperty<string | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        metadata?: import("mongoose").SchemaDefinitionProperty<{
            [key: string]: any;
            propertyId?: string;
            propertyType?: string;
            city?: string;
            price?: number;
            filters?: Record<string, any>;
            message?: string;
            duration?: number;
            confidence?: number;
        } | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        impactScore?: import("mongoose").SchemaDefinitionProperty<number | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        timestamp?: import("mongoose").SchemaDefinitionProperty<Date, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        source?: import("mongoose").SchemaDefinitionProperty<string | undefined, LeadActivity, Document<unknown, {}, LeadActivity, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<LeadActivity & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
    }, LeadActivity>;
} | {
    name: string;
    schema: import("mongoose").Schema<ChatAnalytics, import("mongoose").Model<ChatAnalytics, any, any, any, any, any, ChatAnalytics>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }, {
        date?: import("mongoose").SchemaDefinitionProperty<Date, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        period?: import("mongoose").SchemaDefinitionProperty<string, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        totalSessions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        totalMessages?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        uniqueUsers?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        guestSessions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        authenticatedSessions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        leadDistribution?: import("mongoose").SchemaDefinitionProperty<{
            hot?: number;
            warm?: number;
            cold?: number;
        }, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        conversions?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        conversionTypes?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        avgMessagesPerSession?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        avgSessionDuration?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        avgResponseTime?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        topCities?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        topPropertyTypes?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        priceRanges?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        topKeywords?: import("mongoose").SchemaDefinitionProperty<string[], ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        propertiesShown?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        propertiesViewed?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        propertiesSaved?: import("mongoose").SchemaDefinitionProperty<number, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        engagementRate?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        bounceRate?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        languageDistribution?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        deviceDistribution?: import("mongoose").SchemaDefinitionProperty<Record<string, number> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        customMetrics?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, ChatAnalytics, Document<unknown, {}, ChatAnalytics, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ChatAnalytics & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
    }, ChatAnalytics>;
} | {
    name: string;
    schema: import("mongoose").Schema<ConversationSummary, import("mongoose").Model<ConversationSummary, any, any, any, any, any, ConversationSummary>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ConversationSummary, Document<unknown, {}, ConversationSummary, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }, {
        sessionId?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        summary?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        keyPoints?: import("mongoose").SchemaDefinitionProperty<string[], ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        userIntent?: import("mongoose").SchemaDefinitionProperty<{
            primary?: string;
            secondary?: string[];
            confidence?: number;
        } | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        requirements?: import("mongoose").SchemaDefinitionProperty<{
            propertyType?: string;
            location?: string;
            budget?: {
                min?: number;
                max?: number;
            };
            bedrooms?: number;
            bathrooms?: number;
            mustHaves?: string[];
            niceToHaves?: string[];
        } | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        userCategory?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        intentClarityScore?: import("mongoose").SchemaDefinitionProperty<number | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        recommendedAction?: import("mongoose").SchemaDefinitionProperty<string | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        tags?: import("mongoose").SchemaDefinitionProperty<string[], ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        generationType?: import("mongoose").SchemaDefinitionProperty<string, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        lastUpdated?: import("mongoose").SchemaDefinitionProperty<Date, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        sentiment?: import("mongoose").SchemaDefinitionProperty<{
            overall?: string;
            confidence?: number;
            keywords?: string[];
        } | undefined, ConversationSummary, Document<unknown, {}, ConversationSummary, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationSummary & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
    }, ConversationSummary>;
} | {
    name: string;
    schema: import("mongoose").Schema<SavedSearch, import("mongoose").Model<SavedSearch, any, any, any, any, any, SavedSearch>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }, {
        userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        sessionId?: import("mongoose").SchemaDefinitionProperty<string | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        name?: import("mongoose").SchemaDefinitionProperty<string, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        filters?: import("mongoose").SchemaDefinitionProperty<{
            [key: string]: any;
            propertyType?: string;
            listingType?: string;
            city?: string;
            neighborhood?: string;
            minPrice?: number;
            maxPrice?: number;
            bedrooms?: number;
            bathrooms?: number;
            minArea?: number;
            maxArea?: number;
            furnished?: boolean;
            amenities?: string[];
        }, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        isActive?: import("mongoose").SchemaDefinitionProperty<boolean, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        notificationsEnabled?: import("mongoose").SchemaDefinitionProperty<boolean, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        notificationFrequency?: import("mongoose").SchemaDefinitionProperty<string, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        lastNotifiedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        matchCount?: import("mongoose").SchemaDefinitionProperty<number, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        lastMatchAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        source?: import("mongoose").SchemaDefinitionProperty<string, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
        metadata?: import("mongoose").SchemaDefinitionProperty<{
            [key: string]: any;
            originalQuery?: string;
            confidence?: number;
        } | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }> | undefined;
    }, SavedSearch>;
})[];
