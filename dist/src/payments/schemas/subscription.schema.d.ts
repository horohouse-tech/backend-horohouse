import { Document, Types } from 'mongoose';
export type SubscriptionDocument = Subscription & Document;
export declare enum BillingCycle {
    WEEKLY = "weekly",
    MONTHLY = "monthly",
    QUARTERLY = "quarterly",
    YEARLY = "yearly"
}
export declare enum SubscriptionPlan {
    STUDENT_FREE = "student_free",
    USER_FREE = "user_free",
    USER_PREMIUM = "user_premium",
    AGENT_FREE = "agent_free",
    AGENT_BASIC = "agent_basic",
    AGENT_PRO = "agent_pro",
    AGENT_ELITE = "agent_elite",
    LANDLORD_FREE = "landlord_free",
    LANDLORD_BASIC = "landlord_basic",
    LANDLORD_PRO = "landlord_pro",
    HOST_FREE = "host_free",
    HOST_STARTER = "host_starter",
    HOST_GROWTH = "host_growth",
    HOST_PRO = "host_pro",
    HOST_ELITE = "host_elite"
}
export declare enum SubscriptionStatus {
    PENDING = "pending",
    ACTIVE = "active",
    EXPIRED = "expired",
    CANCELLED = "cancelled",
    SUSPENDED = "suspended"
}
export type SubscriptionFeatures = {
    maxListings?: number;
    maxActiveListings?: number;
    canBoostListings?: boolean;
    boostsPerMonth?: number;
    prioritySupport?: boolean;
    analytics?: boolean;
    apiAccess?: boolean;
    teamMembers?: number;
    virtualTours?: boolean;
    professionalPhotography?: boolean;
    featuredListings?: number;
    socialMediaIntegration?: boolean;
    leadGeneration?: boolean;
    whiteLabel?: boolean;
    role?: 'landlord' | 'agent' | 'student' | 'user' | 'host';
    maxProperties?: number;
    bookingCalendar?: boolean;
    shortTermRentalSupport?: boolean;
    smartPricing?: boolean;
    maintenanceTracking?: boolean;
    premiumVisibility?: boolean;
    dedicatedSupport?: boolean;
    [key: string]: any;
};
export declare class Subscription {
    userId: Types.ObjectId;
    plan: SubscriptionPlan;
    status: SubscriptionStatus;
    billingCycle: BillingCycle;
    price: number;
    currency: string;
    features: SubscriptionFeatures;
    startDate?: Date;
    endDate?: Date;
    nextBillingDate?: Date;
    autoRenew: boolean;
    listingsUsed: number;
    boostsUsed: number;
    lastPaymentTransactionId?: Types.ObjectId;
    lastPaymentDate?: Date;
    cancelledAt?: Date;
    cancellationReason?: string;
    scheduledCancellationDate?: Date;
    previousSubscriptionId?: Types.ObjectId;
    upgradedFrom?: SubscriptionPlan;
    providerSubscriptionId?: string;
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const SubscriptionSchema: import("mongoose").Schema<Subscription, import("mongoose").Model<Subscription, any, any, any, any, any, Subscription>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Subscription, Document<unknown, {}, Subscription, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    plan?: import("mongoose").SchemaDefinitionProperty<SubscriptionPlan, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<SubscriptionStatus, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    billingCycle?: import("mongoose").SchemaDefinitionProperty<BillingCycle, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<string, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    features?: import("mongoose").SchemaDefinitionProperty<SubscriptionFeatures, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    startDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nextBillingDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    autoRenew?: import("mongoose").SchemaDefinitionProperty<boolean, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    listingsUsed?: import("mongoose").SchemaDefinitionProperty<number, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    boostsUsed?: import("mongoose").SchemaDefinitionProperty<number, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastPaymentTransactionId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastPaymentDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancelledAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancellationReason?: import("mongoose").SchemaDefinitionProperty<string | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    scheduledCancellationDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    previousSubscriptionId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    upgradedFrom?: import("mongoose").SchemaDefinitionProperty<SubscriptionPlan | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    providerSubscriptionId?: import("mongoose").SchemaDefinitionProperty<string | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Subscription, Document<unknown, {}, Subscription, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subscription & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Subscription>;
