import { Document } from 'mongoose';
export type SystemSettingsDocument = SystemSettings & Document;
declare class SocialLinks {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
}
declare class FeatureFlags {
    enableAiChat: boolean;
    enableRecommendations: boolean;
    enableWhatsAppBot: boolean;
    enableBooking: boolean;
}
export declare class SystemSettings {
    siteName: string;
    siteDescription: string;
    supportEmail: string;
    supportPhone: string;
    socialLinks: SocialLinks;
    maintenanceMode: boolean;
    maintenanceMessage: string;
    allowRegistration: boolean;
    featureFlags: FeatureFlags;
    version: string;
}
export declare const SystemSettingsSchema: import("mongoose").Schema<SystemSettings, import("mongoose").Model<SystemSettings, any, any, any, any, any, SystemSettings>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SystemSettings, Document<unknown, {}, SystemSettings, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    siteName?: import("mongoose").SchemaDefinitionProperty<string, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    siteDescription?: import("mongoose").SchemaDefinitionProperty<string, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    supportEmail?: import("mongoose").SchemaDefinitionProperty<string, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    supportPhone?: import("mongoose").SchemaDefinitionProperty<string, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    socialLinks?: import("mongoose").SchemaDefinitionProperty<SocialLinks, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maintenanceMode?: import("mongoose").SchemaDefinitionProperty<boolean, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maintenanceMessage?: import("mongoose").SchemaDefinitionProperty<string, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    allowRegistration?: import("mongoose").SchemaDefinitionProperty<boolean, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    featureFlags?: import("mongoose").SchemaDefinitionProperty<FeatureFlags, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    version?: import("mongoose").SchemaDefinitionProperty<string, SystemSettings, Document<unknown, {}, SystemSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SystemSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SystemSettings>;
export {};
