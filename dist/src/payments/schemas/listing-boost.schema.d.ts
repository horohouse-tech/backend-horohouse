import { Document, Types } from 'mongoose';
export type ListingBoostDocument = ListingBoost & Document;
export declare enum BoostType {
    STANDARD = "standard",
    FEATURED = "featured",
    HIGHLIGHT = "highlight",
    TOP = "top",
    HOMEPAGE = "homepage",
    SOCIAL_MEDIA = "social_media"
}
export declare enum BoostStatus {
    PENDING = "pending",
    ACTIVE = "active",
    EXPIRED = "expired",
    CANCELLED = "cancelled"
}
export declare class ListingBoost {
    userId: Types.ObjectId;
    propertyId: Types.ObjectId;
    boostType: BoostType;
    status: BoostStatus;
    duration: number;
    price: number;
    currency?: string;
    startDate?: Date;
    endDate?: Date;
    paymentDate?: Date;
    transactionId?: Types.ObjectId;
    impressions?: number;
    clicks?: number;
    inquiries?: number;
    cancelledAt?: Date;
    cancellationReason?: string;
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ListingBoostSchema: import("mongoose").Schema<ListingBoost, import("mongoose").Model<ListingBoost, any, any, any, any, any, ListingBoost>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ListingBoost, Document<unknown, {}, ListingBoost, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    boostType?: import("mongoose").SchemaDefinitionProperty<BoostType, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<BoostStatus, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duration?: import("mongoose").SchemaDefinitionProperty<number, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<string | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    startDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    transactionId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    impressions?: import("mongoose").SchemaDefinitionProperty<number | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    clicks?: import("mongoose").SchemaDefinitionProperty<number | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inquiries?: import("mongoose").SchemaDefinitionProperty<number | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancelledAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancellationReason?: import("mongoose").SchemaDefinitionProperty<string | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, ListingBoost, Document<unknown, {}, ListingBoost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ListingBoost & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ListingBoost>;
