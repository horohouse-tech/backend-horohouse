import { Document, Types } from 'mongoose';
export type InquiryDocument = Inquiry & Document;
export declare enum InquiryStatus {
    PENDING = "pending",
    RESPONDED = "responded",
    CLOSED = "closed"
}
export declare enum InquiryType {
    GENERAL = "general",
    VIEWING_REQUEST = "viewing_request",
    PRICE_INQUIRY = "price_inquiry",
    AVAILABILITY = "availability",
    MORE_INFO = "more_info"
}
export declare class Inquiry {
    propertyId: Types.ObjectId;
    userId: Types.ObjectId;
    agentId: Types.ObjectId;
    message: string;
    type: InquiryType;
    status: InquiryStatus;
    response?: string;
    respondedAt?: Date;
    respondedBy?: Types.ObjectId;
    preferredContactMethod?: string;
    preferredContactTime?: string;
    viewingDate?: Date;
    budget?: number;
    moveInDate?: Date;
    contactEmail?: string;
    contactPhone?: string;
    isRead: boolean;
    readAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const InquirySchema: import("mongoose").Schema<Inquiry, import("mongoose").Model<Inquiry, any, any, any, any, any, Inquiry>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Inquiry, Document<unknown, {}, Inquiry, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    message?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<InquiryType, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<InquiryStatus, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    response?: import("mongoose").SchemaDefinitionProperty<string | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    respondedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    respondedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    preferredContactMethod?: import("mongoose").SchemaDefinitionProperty<string | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    preferredContactTime?: import("mongoose").SchemaDefinitionProperty<string | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    viewingDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    budget?: import("mongoose").SchemaDefinitionProperty<number | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    moveInDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contactEmail?: import("mongoose").SchemaDefinitionProperty<string | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contactPhone?: import("mongoose").SchemaDefinitionProperty<string | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isRead?: import("mongoose").SchemaDefinitionProperty<boolean, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    readAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Inquiry>;
