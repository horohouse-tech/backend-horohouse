import { Document, Types } from 'mongoose';
export type SavedSearchDocument = SavedSearch & Document & {
    createdAt: Date;
    updatedAt: Date;
};
export declare enum SearchFrequency {
    INSTANT = "instant",
    DAILY = "daily",
    WEEKLY = "weekly",
    NEVER = "never"
}
export declare class SavedSearch {
    userId: Types.ObjectId;
    name: string;
    searchCriteria: {
        minPrice?: number;
        maxPrice?: number;
        propertyType?: string;
        listingType?: string;
        city?: string;
        state?: string;
        bedrooms?: number;
        bathrooms?: number;
        amenities?: string[];
        latitude?: number;
        longitude?: number;
        radius?: number;
    };
    notificationFrequency: SearchFrequency;
    isActive: boolean;
    resultsCount: number;
    lastNotificationSent?: Date;
    lastChecked?: Date;
    newMatchingProperties: Types.ObjectId[];
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
    name?: import("mongoose").SchemaDefinitionProperty<string, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    searchCriteria?: import("mongoose").SchemaDefinitionProperty<{
        minPrice?: number;
        maxPrice?: number;
        propertyType?: string;
        listingType?: string;
        city?: string;
        state?: string;
        bedrooms?: number;
        bathrooms?: number;
        amenities?: string[];
        latitude?: number;
        longitude?: number;
        radius?: number;
    }, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notificationFrequency?: import("mongoose").SchemaDefinitionProperty<SearchFrequency, SavedSearch, Document<unknown, {}, SavedSearch, {
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
    resultsCount?: import("mongoose").SchemaDefinitionProperty<number, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastNotificationSent?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastChecked?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    newMatchingProperties?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], SavedSearch, Document<unknown, {}, SavedSearch, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SavedSearch & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SavedSearch>;
