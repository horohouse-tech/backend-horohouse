import { Document, Types } from 'mongoose';
export type OnboardingDocument = Onboarding & Document;
export interface PropertyPreferences {
    propertyType: string[];
    budget: {
        min: number;
        max: number;
        currency: string;
    };
    location: string[];
    bedrooms: number[];
    bathrooms: number[];
    features: string[];
}
export interface AgentPreferences {
    licenseNumber: string;
    agency: string;
    experience: number;
    specializations: string[];
    serviceAreas: string[];
}
export declare class Onboarding {
    userId: Types.ObjectId;
    isCompleted: boolean;
    currentStep: number;
    totalSteps: number;
    propertyPreferences?: PropertyPreferences;
    agentPreferences?: AgentPreferences;
    completedSteps: string[];
    completedAt?: Date;
    lastActivityAt: Date;
    welcomeEmailSent: boolean;
    completionEmailSent: boolean;
}
export declare const OnboardingSchema: import("mongoose").Schema<Onboarding, import("mongoose").Model<Onboarding, any, any, any, any, any, Onboarding>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Onboarding, Document<unknown, {}, Onboarding, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isCompleted?: import("mongoose").SchemaDefinitionProperty<boolean, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currentStep?: import("mongoose").SchemaDefinitionProperty<number, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalSteps?: import("mongoose").SchemaDefinitionProperty<number, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyPreferences?: import("mongoose").SchemaDefinitionProperty<PropertyPreferences | undefined, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agentPreferences?: import("mongoose").SchemaDefinitionProperty<AgentPreferences | undefined, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    completedSteps?: import("mongoose").SchemaDefinitionProperty<string[], Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    completedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastActivityAt?: import("mongoose").SchemaDefinitionProperty<Date, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    welcomeEmailSent?: import("mongoose").SchemaDefinitionProperty<boolean, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    completionEmailSent?: import("mongoose").SchemaDefinitionProperty<boolean, Onboarding, Document<unknown, {}, Onboarding, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Onboarding & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Onboarding>;
