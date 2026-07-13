import { Document, Types } from 'mongoose';
export type SplitPaymentDocument = SplitPayment & Document;
export declare enum SplitPaymentStatus {
    PENDING = "pending",
    PARTIAL = "partial",
    COMPLETE = "complete",
    DISBURSED = "disbursed",
    OVERDUE = "overdue"
}
export declare enum TenantShareStatus {
    UNPAID = "unpaid",
    PAID = "paid",
    OVERDUE = "overdue",
    WAIVED = "waived"
}
export declare enum MoMoProvider {
    MTN = "mtn",
    ORANGE = "orange"
}
export interface TenantShare {
    tenantUserId: Types.ObjectId;
    tenantName: string;
    tenantPhone?: string;
    amountDue: number;
    amountPaid: number;
    status: TenantShareStatus;
    momoPhone?: string;
    momoProvider?: MoMoProvider;
    momoTransactionId?: string;
    paidAt?: Date;
    dueDate: Date;
}
export declare class SplitPayment {
    propertyId: Types.ObjectId;
    leaseId: Types.ObjectId;
    landlordUserId: Types.ObjectId;
    cycleLabel: string;
    cycleStart: Date;
    cycleEnd: Date;
    totalRent: number;
    tenantShares: TenantShare[];
    status: SplitPaymentStatus;
    totalCollected: number;
    disbursedAt?: Date;
    disbursementTransactionId?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const SplitPaymentSchema: import("mongoose").Schema<SplitPayment, import("mongoose").Model<SplitPayment, any, any, any, any, any, SplitPayment>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SplitPayment, Document<unknown, {}, SplitPayment, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    leaseId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    landlordUserId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cycleLabel?: import("mongoose").SchemaDefinitionProperty<string, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cycleStart?: import("mongoose").SchemaDefinitionProperty<Date, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cycleEnd?: import("mongoose").SchemaDefinitionProperty<Date, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalRent?: import("mongoose").SchemaDefinitionProperty<number, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tenantShares?: import("mongoose").SchemaDefinitionProperty<TenantShare[], SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<SplitPaymentStatus, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalCollected?: import("mongoose").SchemaDefinitionProperty<number, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    disbursedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    disbursementTransactionId?: import("mongoose").SchemaDefinitionProperty<string | undefined, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, SplitPayment, Document<unknown, {}, SplitPayment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SplitPayment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SplitPayment>;
