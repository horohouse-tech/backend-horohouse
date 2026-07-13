import { Document, Types } from 'mongoose';
export type LeadDocument = Lead & Document;
export declare enum LeadStatus {
    NEW = "new",
    CONTACTED = "contacted",
    QUALIFIED = "qualified",
    LOST = "lost"
}
export declare enum LeadSource {
    WEBSITE = "website",
    REFERRAL = "referral",
    MESSAGE = "message",
    CAMPAIGN = "campaign"
}
export declare enum LeadPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
export declare class LeadNote {
    _id: Types.ObjectId;
    content: string;
    createdAt: Date;
}
export declare const LeadNoteSchema: import("mongoose").Schema<LeadNote, import("mongoose").Model<LeadNote, any, any, any, any, any, LeadNote>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LeadNote, Document<unknown, {}, LeadNote, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<LeadNote & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LeadNote, Document<unknown, {}, LeadNote, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadNote & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, LeadNote, Document<unknown, {}, LeadNote, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadNote & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, LeadNote, Document<unknown, {}, LeadNote, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LeadNote & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, LeadNote>;
export declare class Lead {
    name: string;
    email?: string;
    phone?: string;
    interest?: string;
    source: LeadSource;
    status: LeadStatus;
    location?: string;
    lastContactedAt?: Date;
    budget?: number;
    propertyType?: string;
    priority?: LeadPriority;
    assignedAgent?: string;
    tags: string[];
    notes: LeadNote[];
}
export declare const LeadSchema: import("mongoose").Schema<Lead, import("mongoose").Model<Lead, any, any, any, any, any, Lead>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Lead, Document<unknown, {}, Lead, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    interest?: import("mongoose").SchemaDefinitionProperty<string | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    source?: import("mongoose").SchemaDefinitionProperty<LeadSource, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<LeadStatus, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastContactedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    budget?: import("mongoose").SchemaDefinitionProperty<number | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyType?: import("mongoose").SchemaDefinitionProperty<string | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priority?: import("mongoose").SchemaDefinitionProperty<LeadPriority | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    assignedAgent?: import("mongoose").SchemaDefinitionProperty<string | undefined, Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notes?: import("mongoose").SchemaDefinitionProperty<LeadNote[], Lead, Document<unknown, {}, Lead, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Lead & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Lead>;
