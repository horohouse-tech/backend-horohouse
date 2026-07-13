import { Document, Types } from 'mongoose';
export type HistoryDocument = History & Document;
export declare enum ActivityType {
    PROPERTY_VIEW = "property_view",
    SEARCH = "search",
    FAVORITE_ADD = "favorite_add",
    FAVORITE_REMOVE = "favorite_remove",
    PROPERTY_INQUIRY = "property_inquiry",
    PROFILE_UPDATE = "profile_update",
    LOGIN = "login",
    LOGOUT = "logout",
    PROPERTY_SHARE = "property_share",
    AGENT_CONTACT = "agent_contact",
    PROPERTY_FAVORITE = "property_favorite",
    PROPERTY_SEARCH = "property_search"
}
export interface SearchFilters {
    minPrice?: number;
    maxPrice?: number;
    propertyType?: string;
    listingType?: string;
    city?: string;
    bedrooms?: number;
    bathrooms?: number;
    amenities?: string[];
    radius?: number;
    latitude?: number;
    longitude?: number;
}
export interface DeviceInfo {
    userAgent?: string;
    platform?: string;
    browser?: string;
    isMobile?: boolean;
    screenResolution?: string;
}
export declare class History {
    userId?: Types.ObjectId;
    activityType: ActivityType;
    propertyId?: Types.ObjectId;
    agentId?: Types.ObjectId;
    searchQuery?: string;
    searchFilters?: SearchFilters;
    resultsCount?: number;
    resultsClicked?: number;
    userLocation?: {
        type: 'Point';
        coordinates: [number, number];
    };
    searchLocation?: {
        type: 'Point';
        coordinates: [number, number];
    };
    city?: string;
    country?: string;
    sessionId?: string;
    ipAddress?: string;
    deviceInfo?: DeviceInfo;
    referrer?: string;
    source?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    viewDuration?: number;
    viewedImages?: string[];
    scrollDepth?: number;
    contactedAgent?: boolean;
    metadata: Record<string, any>;
    tags?: string[];
    inquiryMessage?: string;
    inquiryPhone?: string;
    inquiryEmail?: string;
    anonymousId?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const HistorySchema: import("mongoose").Schema<History, import("mongoose").Model<History, any, any, any, any, any, History>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, History, Document<unknown, {}, History, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<History & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    activityType?: import("mongoose").SchemaDefinitionProperty<ActivityType, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    searchQuery?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    searchFilters?: import("mongoose").SchemaDefinitionProperty<SearchFilters | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    resultsCount?: import("mongoose").SchemaDefinitionProperty<number | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    resultsClicked?: import("mongoose").SchemaDefinitionProperty<number | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userLocation?: import("mongoose").SchemaDefinitionProperty<{
        type: "Point";
        coordinates: [number, number];
    } | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    searchLocation?: import("mongoose").SchemaDefinitionProperty<{
        type: "Point";
        coordinates: [number, number];
    } | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    city?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sessionId?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ipAddress?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deviceInfo?: import("mongoose").SchemaDefinitionProperty<DeviceInfo | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    referrer?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    source?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    utmSource?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    utmMedium?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    utmCampaign?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    viewDuration?: import("mongoose").SchemaDefinitionProperty<number | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    viewedImages?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    scrollDepth?: import("mongoose").SchemaDefinitionProperty<number | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contactedAgent?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inquiryMessage?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inquiryPhone?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inquiryEmail?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    anonymousId?: import("mongoose").SchemaDefinitionProperty<string | undefined, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, History, Document<unknown, {}, History, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<History & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, History>;
