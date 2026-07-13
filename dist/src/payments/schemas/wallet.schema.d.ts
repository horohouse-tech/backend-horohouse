import { Document, Types } from 'mongoose';
export type WalletDocument = Wallet & Document;
export declare enum WalletTransactionType {
    CREDIT = "credit",
    DEBIT = "debit"
}
export interface WalletTransaction {
    type: WalletTransactionType;
    amount: number;
    balance: number;
    description: string;
    reference?: string;
    transactionId?: Types.ObjectId;
    createdAt: Date;
}
export declare class Wallet {
    userId: Types.ObjectId;
    balance: number;
    availableBalance: number;
    pendingBalance: number;
    totalEarned: number;
    totalDeposited?: number;
    totalWithdrawn?: number;
    transactions: WalletTransaction[];
    lastTransactionDate?: Date;
    bankAccountName?: string;
    bankAccountNumber?: string;
    bankName?: string;
    bankCode?: string;
    mobileMoneyNumber?: string;
    mobileMoneyProvider?: string;
    autoWithdrawal?: boolean;
    autoWithdrawalThreshold?: number;
    withdrawalDetails?: {
        method?: string;
        accountNumber?: string;
        accountName?: string;
        bankCode?: string;
        [key: string]: any;
    };
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const WalletSchema: import("mongoose").Schema<Wallet, import("mongoose").Model<Wallet, any, any, any, any, any, Wallet>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Wallet, Document<unknown, {}, Wallet, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    balance?: import("mongoose").SchemaDefinitionProperty<number, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    availableBalance?: import("mongoose").SchemaDefinitionProperty<number, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pendingBalance?: import("mongoose").SchemaDefinitionProperty<number, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalEarned?: import("mongoose").SchemaDefinitionProperty<number, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalDeposited?: import("mongoose").SchemaDefinitionProperty<number | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalWithdrawn?: import("mongoose").SchemaDefinitionProperty<number | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    transactions?: import("mongoose").SchemaDefinitionProperty<WalletTransaction[], Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastTransactionDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bankAccountName?: import("mongoose").SchemaDefinitionProperty<string | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bankAccountNumber?: import("mongoose").SchemaDefinitionProperty<string | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bankName?: import("mongoose").SchemaDefinitionProperty<string | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bankCode?: import("mongoose").SchemaDefinitionProperty<string | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mobileMoneyNumber?: import("mongoose").SchemaDefinitionProperty<string | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mobileMoneyProvider?: import("mongoose").SchemaDefinitionProperty<string | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    autoWithdrawal?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    autoWithdrawalThreshold?: import("mongoose").SchemaDefinitionProperty<number | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    withdrawalDetails?: import("mongoose").SchemaDefinitionProperty<{
        [key: string]: any;
        method?: string;
        accountNumber?: string;
        accountName?: string;
        bankCode?: string;
    } | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any> | undefined, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Wallet>;
