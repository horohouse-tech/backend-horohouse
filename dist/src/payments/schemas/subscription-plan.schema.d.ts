import { Document } from 'mongoose';
import { SubscriptionFeatures, SubscriptionPlan } from './subscription.schema';
import { BillingCycle } from './transaction.schema';
export type SubscriptionPlanDocument = SubscriptionPlanModel & Document;
export declare class SubscriptionPlanModel {
    name: SubscriptionPlan;
    displayName: string;
    description: string;
    highlights: string[];
    pricing: {
        [BillingCycle.MONTHLY]?: number;
        [BillingCycle.QUARTERLY]?: number;
        [BillingCycle.YEARLY]?: number;
    };
    currency: string;
    features: SubscriptionFeatures;
    hasTrialPeriod: boolean;
    trialDurationDays?: number;
    isActive: boolean;
    isPublic: boolean;
    displayOrder: number;
    currentDiscount?: number;
    discountEndDate?: Date;
    isPopular: boolean;
    metadata?: {
        color?: string;
        icon?: string;
        badge?: string;
        [key: string]: any;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const SubscriptionPlanSchema: import("mongoose").Schema<SubscriptionPlanModel, import("mongoose").Model<SubscriptionPlanModel, any, any, any, any, any, SubscriptionPlanModel>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<SubscriptionPlan, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    displayName?: import("mongoose").SchemaDefinitionProperty<string, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    highlights?: import("mongoose").SchemaDefinitionProperty<string[], SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pricing?: import("mongoose").SchemaDefinitionProperty<{
        monthly?: number;
        quarterly?: number;
        yearly?: number;
    }, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<string, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    features?: import("mongoose").SchemaDefinitionProperty<SubscriptionFeatures, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hasTrialPeriod?: import("mongoose").SchemaDefinitionProperty<boolean, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trialDurationDays?: import("mongoose").SchemaDefinitionProperty<number | undefined, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isPublic?: import("mongoose").SchemaDefinitionProperty<boolean, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    displayOrder?: import("mongoose").SchemaDefinitionProperty<number, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currentDiscount?: import("mongoose").SchemaDefinitionProperty<number | undefined, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    discountEndDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isPopular?: import("mongoose").SchemaDefinitionProperty<boolean, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<{
        [key: string]: any;
        color?: string;
        icon?: string;
        badge?: string;
    } | undefined, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, SubscriptionPlanModel, Document<unknown, {}, SubscriptionPlanModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SubscriptionPlanModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SubscriptionPlanModel>;
