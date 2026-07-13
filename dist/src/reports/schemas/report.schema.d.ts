import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Property } from '../../properties/schemas/property.schema';
export type ReportDocument = Report & Document;
export declare class Report {
    reporter: User;
    property: Property;
    reason: string;
    details?: string;
    status: string;
    adminNotes?: string;
}
export declare const ReportSchema: MongooseSchema<Report, import("mongoose").Model<Report, any, any, any, any, any, Report>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Report, Document<unknown, {}, Report, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Report & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    reporter?: import("mongoose").SchemaDefinitionProperty<User, Report, Document<unknown, {}, Report, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    property?: import("mongoose").SchemaDefinitionProperty<Property, Report, Document<unknown, {}, Report, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reason?: import("mongoose").SchemaDefinitionProperty<string, Report, Document<unknown, {}, Report, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    details?: import("mongoose").SchemaDefinitionProperty<string | undefined, Report, Document<unknown, {}, Report, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Report, Document<unknown, {}, Report, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    adminNotes?: import("mongoose").SchemaDefinitionProperty<string | undefined, Report, Document<unknown, {}, Report, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Report>;
