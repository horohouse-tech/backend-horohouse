import { Document, Types } from 'mongoose';
export type AppointmentDocument = Appointment & Document;
export declare enum AppointmentStatus {
    SCHEDULED = "scheduled",
    RESCHEDULED = "rescheduled",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    NO_SHOW = "no-show"
}
export declare enum AppointmentType {
    IN_PERSON = "in-person",
    VIRTUAL = "virtual",
    PHONE_CALL = "phone-call"
}
export declare class AppointmentNote {
    _id: Types.ObjectId;
    content: string;
    createdAt: Date;
}
export declare const AppointmentNoteSchema: import("mongoose").Schema<AppointmentNote, import("mongoose").Model<AppointmentNote, any, any, any, any, any, AppointmentNote>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AppointmentNote, Document<unknown, {}, AppointmentNote, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AppointmentNote & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, AppointmentNote, Document<unknown, {}, AppointmentNote, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AppointmentNote & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, AppointmentNote, Document<unknown, {}, AppointmentNote, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AppointmentNote & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, AppointmentNote, Document<unknown, {}, AppointmentNote, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AppointmentNote & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AppointmentNote>;
export declare class Appointment {
    title: string;
    property?: string;
    propertyId?: Types.ObjectId;
    agentId: Types.ObjectId;
    clientName: string;
    clientEmail?: string;
    clientPhone?: string;
    clientId?: Types.ObjectId;
    type: AppointmentType;
    location?: string;
    description?: string;
    date: Date;
    duration?: number;
    status: AppointmentStatus;
    reminderSent: boolean;
    rescheduleHistory: {
        from: Date;
        to: Date;
        reason?: string;
    }[];
    notes: AppointmentNote[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const AppointmentSchema: import("mongoose").Schema<Appointment, import("mongoose").Model<Appointment, any, any, any, any, any, Appointment>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Appointment, Document<unknown, {}, Appointment, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    property?: import("mongoose").SchemaDefinitionProperty<string | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    clientName?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    clientEmail?: import("mongoose").SchemaDefinitionProperty<string | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    clientPhone?: import("mongoose").SchemaDefinitionProperty<string | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    clientId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<AppointmentType, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<Date, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duration?: import("mongoose").SchemaDefinitionProperty<number | undefined, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<AppointmentStatus, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reminderSent?: import("mongoose").SchemaDefinitionProperty<boolean, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rescheduleHistory?: import("mongoose").SchemaDefinitionProperty<{
        from: Date;
        to: Date;
        reason?: string;
    }[], Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notes?: import("mongoose").SchemaDefinitionProperty<AppointmentNote[], Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Appointment>;
