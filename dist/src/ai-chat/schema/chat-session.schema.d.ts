import { Document, Types } from 'mongoose';
export type ChatSessionDocument = ChatSession & Document;
export declare class ChatMessage {
    role: string;
    content: string;
    timestamp: Date;
    properties?: any[];
    filters?: Record<string, any>;
    confidence?: number;
    method?: string;
}
export declare const ChatMessageSchema: import("mongoose").Schema<ChatMessage, import("mongoose").Model<ChatMessage, any, any, any, any, any, ChatMessage>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatMessage, Document<unknown, {}, ChatMessage, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    role?: import("mongoose").SchemaDefinitionProperty<string, ChatMessage, Document<unknown, {}, ChatMessage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, ChatMessage, Document<unknown, {}, ChatMessage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timestamp?: import("mongoose").SchemaDefinitionProperty<Date, ChatMessage, Document<unknown, {}, ChatMessage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    properties?: import("mongoose").SchemaDefinitionProperty<any[] | undefined, ChatMessage, Document<unknown, {}, ChatMessage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    filters?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, ChatMessage, Document<unknown, {}, ChatMessage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    confidence?: import("mongoose").SchemaDefinitionProperty<number | undefined, ChatMessage, Document<unknown, {}, ChatMessage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    method?: import("mongoose").SchemaDefinitionProperty<string | undefined, ChatMessage, Document<unknown, {}, ChatMessage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ChatMessage>;
export declare class LeadScore {
    score: number;
    classification: string;
    priority: string;
    signals: string[];
    nextAction?: string;
    calculatedAt: Date;
    history?: Array<{
        score: number;
        classification: string;
        timestamp: Date;
    }>;
}
export declare const LeadScoreSchema: import("mongoose").Schema<LeadScore, import("mongoose").Model<LeadScore, any, any, any, any, any, LeadScore>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LeadScore, Document<unknown, {}, LeadScore, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    score?: import("mongoose").SchemaDefinitionProperty<number, LeadScore, Document<unknown, {}, LeadScore, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    classification?: import("mongoose").SchemaDefinitionProperty<string, LeadScore, Document<unknown, {}, LeadScore, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priority?: import("mongoose").SchemaDefinitionProperty<string, LeadScore, Document<unknown, {}, LeadScore, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    signals?: import("mongoose").SchemaDefinitionProperty<string[], LeadScore, Document<unknown, {}, LeadScore, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nextAction?: import("mongoose").SchemaDefinitionProperty<string | undefined, LeadScore, Document<unknown, {}, LeadScore, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    calculatedAt?: import("mongoose").SchemaDefinitionProperty<Date, LeadScore, Document<unknown, {}, LeadScore, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    history?: import("mongoose").SchemaDefinitionProperty<{
        score: number;
        classification: string;
        timestamp: Date;
    }[] | undefined, LeadScore, Document<unknown, {}, LeadScore, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadScore & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, LeadScore>;
export declare class PropertySearchFilters {
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
    status?: string;
    additional?: Record<string, any>;
}
export declare const PropertySearchFiltersSchema: import("mongoose").Schema<PropertySearchFilters, import("mongoose").Model<PropertySearchFilters, any, any, any, any, any, PropertySearchFilters>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    propertyType?: import("mongoose").SchemaDefinitionProperty<string | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    listingType?: import("mongoose").SchemaDefinitionProperty<string | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    city?: import("mongoose").SchemaDefinitionProperty<string | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    neighborhood?: import("mongoose").SchemaDefinitionProperty<string | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    minPrice?: import("mongoose").SchemaDefinitionProperty<number | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maxPrice?: import("mongoose").SchemaDefinitionProperty<number | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bedrooms?: import("mongoose").SchemaDefinitionProperty<number | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bathrooms?: import("mongoose").SchemaDefinitionProperty<number | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    minArea?: import("mongoose").SchemaDefinitionProperty<number | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maxArea?: import("mongoose").SchemaDefinitionProperty<number | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    furnished?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amenities?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    additional?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, PropertySearchFilters, Document<unknown, {}, PropertySearchFilters, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PropertySearchFilters & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, PropertySearchFilters>;
export declare class SessionMetadata {
    userAgent?: string;
    ipAddress?: string;
    device?: string;
    platform?: string;
    language?: string;
    referrer?: string;
    location?: {
        country?: string;
        city?: string;
        timezone?: string;
    };
}
export declare const SessionMetadataSchema: import("mongoose").Schema<SessionMetadata, import("mongoose").Model<SessionMetadata, any, any, any, any, any, SessionMetadata>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SessionMetadata, Document<unknown, {}, SessionMetadata, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userAgent?: import("mongoose").SchemaDefinitionProperty<string | undefined, SessionMetadata, Document<unknown, {}, SessionMetadata, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ipAddress?: import("mongoose").SchemaDefinitionProperty<string | undefined, SessionMetadata, Document<unknown, {}, SessionMetadata, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    device?: import("mongoose").SchemaDefinitionProperty<string | undefined, SessionMetadata, Document<unknown, {}, SessionMetadata, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    platform?: import("mongoose").SchemaDefinitionProperty<string | undefined, SessionMetadata, Document<unknown, {}, SessionMetadata, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    language?: import("mongoose").SchemaDefinitionProperty<string | undefined, SessionMetadata, Document<unknown, {}, SessionMetadata, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    referrer?: import("mongoose").SchemaDefinitionProperty<string | undefined, SessionMetadata, Document<unknown, {}, SessionMetadata, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<{
        country?: string;
        city?: string;
        timezone?: string;
    } | undefined, SessionMetadata, Document<unknown, {}, SessionMetadata, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SessionMetadata & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SessionMetadata>;
export declare class ConversationContext {
    primaryIntent?: string;
    topicsDiscussed: string[];
    propertiesViewed: string[];
    propertiesSaved: string[];
    questionsAsked: number;
    refinements: number;
    mentionedBudget: boolean;
    mentionedTimeframe: boolean;
    askedForViewing: boolean;
    askedForAgent: boolean;
    preferredLanguage?: string;
    userPreferences?: Record<string, any>;
}
export declare const ConversationContextSchema: import("mongoose").Schema<ConversationContext, import("mongoose").Model<ConversationContext, any, any, any, any, any, ConversationContext>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ConversationContext, Document<unknown, {}, ConversationContext, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    primaryIntent?: import("mongoose").SchemaDefinitionProperty<string | undefined, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    topicsDiscussed?: import("mongoose").SchemaDefinitionProperty<string[], ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesViewed?: import("mongoose").SchemaDefinitionProperty<string[], ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesSaved?: import("mongoose").SchemaDefinitionProperty<string[], ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    questionsAsked?: import("mongoose").SchemaDefinitionProperty<number, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    refinements?: import("mongoose").SchemaDefinitionProperty<number, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mentionedBudget?: import("mongoose").SchemaDefinitionProperty<boolean, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mentionedTimeframe?: import("mongoose").SchemaDefinitionProperty<boolean, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    askedForViewing?: import("mongoose").SchemaDefinitionProperty<boolean, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    askedForAgent?: import("mongoose").SchemaDefinitionProperty<boolean, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    preferredLanguage?: import("mongoose").SchemaDefinitionProperty<string | undefined, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userPreferences?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, ConversationContext, Document<unknown, {}, ConversationContext, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConversationContext & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ConversationContext>;
export declare class ChatSession {
    sessionId: string;
    userId?: Types.ObjectId;
    userType: string;
    messages: ChatMessage[];
    currentFilters?: PropertySearchFilters;
    leadScore?: LeadScore;
    context: ConversationContext;
    metadata?: SessionMetadata;
    status: string;
    lastActiveAt: Date;
    convertedAt?: Date;
    conversionType?: string;
    messageCount: number;
    propertiesShown: number;
    isTestSession: boolean;
    analytics?: {
        avgResponseTime?: number;
        totalDuration?: number;
        bounceRate?: number;
        engagementScore?: number;
    };
    tags: string[];
    notes?: string;
    expiresAt?: Date;
}
export declare const ChatSessionSchema: import("mongoose").Schema<ChatSession, import("mongoose").Model<ChatSession, any, any, any, any, any, ChatSession>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatSession, Document<unknown, {}, ChatSession, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    sessionId?: import("mongoose").SchemaDefinitionProperty<string, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userType?: import("mongoose").SchemaDefinitionProperty<string, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    messages?: import("mongoose").SchemaDefinitionProperty<ChatMessage[], ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currentFilters?: import("mongoose").SchemaDefinitionProperty<PropertySearchFilters | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    leadScore?: import("mongoose").SchemaDefinitionProperty<LeadScore | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    context?: import("mongoose").SchemaDefinitionProperty<ConversationContext, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<SessionMetadata | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastActiveAt?: import("mongoose").SchemaDefinitionProperty<Date, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    convertedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conversionType?: import("mongoose").SchemaDefinitionProperty<string | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    messageCount?: import("mongoose").SchemaDefinitionProperty<number, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesShown?: import("mongoose").SchemaDefinitionProperty<number, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isTestSession?: import("mongoose").SchemaDefinitionProperty<boolean, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    analytics?: import("mongoose").SchemaDefinitionProperty<{
        avgResponseTime?: number;
        totalDuration?: number;
        bounceRate?: number;
        engagementScore?: number;
    } | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notes?: import("mongoose").SchemaDefinitionProperty<string | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    expiresAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, ChatSession, Document<unknown, {}, ChatSession, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChatSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ChatSession>;
