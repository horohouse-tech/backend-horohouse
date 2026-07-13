import { Document, Types } from 'mongoose';
export type DigitalLeaseDocument = DigitalLease & Document;
export declare enum LeaseStatus {
    DRAFT = "draft",
    PENDING_TENANT = "pending_tenant",
    ACTIVE = "active",
    EXPIRED = "expired",
    TERMINATED = "terminated"
}
export declare enum ConditionRating {
    EXCELLENT = "excellent",
    GOOD = "good",
    FAIR = "fair",
    POOR = "poor"
}
export interface LeaseTenant {
    tenantUserId: Types.ObjectId;
    tenantName: string;
    tenantEmail?: string;
    tenantPhone?: string;
    signatureUrl?: string;
    signedAt?: Date;
    rentShare: number;
}
export interface ConditionItem {
    label: string;
    rating: ConditionRating;
    notes?: string;
    photoUrls: string[];
}
export interface ConditionLog {
    loggedByUserId: Types.ObjectId;
    loggedAt: Date;
    items: ConditionItem[];
    overallNotes?: string;
    type: 'move_in' | 'move_out';
}
export declare class DigitalLease {
    propertyId: Types.ObjectId;
    landlordUserId: Types.ObjectId;
    tenants: LeaseTenant[];
    leaseStart: Date;
    leaseEnd: Date;
    monthlyRent: number;
    depositAmount: number;
    advanceMonths: number;
    status: LeaseStatus;
    landlordSignatureUrl?: string;
    landlordSignedAt?: Date;
    clauses: Array<{
        heading: string;
        body: string;
    }>;
    customClauses: Array<{
        heading: string;
        body: string;
    }>;
    conditionLogs: ConditionLog[];
    terminationReason?: string;
    terminatedAt?: Date;
    terminatedByUserId?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare const DigitalLeaseSchema: import("mongoose").Schema<DigitalLease, import("mongoose").Model<DigitalLease, any, any, any, any, any, DigitalLease>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DigitalLease, Document<unknown, {}, DigitalLease, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    landlordUserId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tenants?: import("mongoose").SchemaDefinitionProperty<LeaseTenant[], DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    leaseStart?: import("mongoose").SchemaDefinitionProperty<Date, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    leaseEnd?: import("mongoose").SchemaDefinitionProperty<Date, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    monthlyRent?: import("mongoose").SchemaDefinitionProperty<number, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    depositAmount?: import("mongoose").SchemaDefinitionProperty<number, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    advanceMonths?: import("mongoose").SchemaDefinitionProperty<number, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<LeaseStatus, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    landlordSignatureUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    landlordSignedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    clauses?: import("mongoose").SchemaDefinitionProperty<{
        heading: string;
        body: string;
    }[], DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customClauses?: import("mongoose").SchemaDefinitionProperty<{
        heading: string;
        body: string;
    }[], DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conditionLogs?: import("mongoose").SchemaDefinitionProperty<ConditionLog[], DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    terminationReason?: import("mongoose").SchemaDefinitionProperty<string | undefined, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    terminatedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    terminatedByUserId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, DigitalLease, Document<unknown, {}, DigitalLease, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DigitalLease & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DigitalLease>;
