import { Document, Types } from 'mongoose';
export type TransactionDocument = Transaction & Document;
export declare enum TransactionType {
    SUBSCRIPTION = "subscription",
    LISTING_FEE = "listing_fee",
    BOOST_LISTING = "boost_listing",
    COMMISSION = "commission",
    DIGITAL_SERVICE = "digital_service",
    REFUND = "refund",
    WALLET_TOPUP = "wallet_topup",
    WALLET_WITHDRAWAL = "wallet_withdrawal",
    BOOKING = "booking"
}
export declare enum TransactionStatus {
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed",
    CANCELLED = "cancelled",
    REFUNDED = "refunded"
}
export declare enum PaymentMethod {
    MTN_MOMO = "mtn_momo",
    ORANGE_MONEY = "orange_money",
    CARD = "card",
    BANK_TRANSFER = "bank_transfer",
    WALLET = "wallet"
}
export declare enum Currency {
    XAF = "XAF",
    XOF = "XOF",
    USD = "USD",
    EUR = "EUR"
}
export declare enum BillingCycle {
    MONTHLY = "monthly",
    QUARTERLY = "quarterly",
    YEARLY = "yearly"
}
export declare class Transaction {
    userId: Types.ObjectId;
    amount: number;
    currency: Currency;
    type: TransactionType;
    status: TransactionStatus;
    paymentMethod: PaymentMethod;
    flutterwaveTransactionId?: string;
    flutterwaveReference?: string;
    flutterwavePaymentLink?: string;
    paymentProviderResponse?: Record<string, any>;
    propertyId?: Types.ObjectId;
    bookingId?: Types.ObjectId;
    subscriptionId?: Types.ObjectId;
    boostId?: Types.ObjectId;
    description?: string;
    metadata?: {
        serviceName?: string;
        duration?: string;
        planName?: string;
        propertyTitle?: string;
        [key: string]: any;
    };
    platformFee?: number;
    paymentProcessingFee?: number;
    netAmount?: number;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    refundedAt?: Date;
    refundReason?: string;
    refundTransactionId?: Types.ObjectId;
    failureReason?: string;
    retryCount?: number;
    completedAt?: Date;
    cancelledAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const TransactionSchema: import("mongoose").Schema<Transaction, import("mongoose").Model<Transaction, any, any, any, any, any, Transaction>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transaction, Document<unknown, {}, Transaction, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<Currency, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<TransactionType, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<TransactionStatus, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentMethod?: import("mongoose").SchemaDefinitionProperty<PaymentMethod, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    flutterwaveTransactionId?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    flutterwaveReference?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    flutterwavePaymentLink?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentProviderResponse?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bookingId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subscriptionId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    boostId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<{
        [key: string]: any;
        serviceName?: string;
        duration?: string;
        planName?: string;
        propertyTitle?: string;
    } | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    platformFee?: import("mongoose").SchemaDefinitionProperty<number | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentProcessingFee?: import("mongoose").SchemaDefinitionProperty<number | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    netAmount?: import("mongoose").SchemaDefinitionProperty<number | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customerName?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customerEmail?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customerPhone?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    refundedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    refundReason?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    refundTransactionId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    failureReason?: import("mongoose").SchemaDefinitionProperty<string | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    retryCount?: import("mongoose").SchemaDefinitionProperty<number | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    completedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancelledAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Transaction, Document<unknown, {}, Transaction, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Transaction & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Transaction>;
