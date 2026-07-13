import { Document, Types } from 'mongoose';
import { StudentVerificationStatus } from '../../users/schemas/user.schema';
export type StudentProfileDocument = StudentProfile & Document;
export declare class StudentProfile {
    userId: Types.ObjectId;
    universityName: string;
    faculty?: string;
    studyLevel?: string;
    enrollmentYear?: number;
    studentIdUrl?: string;
    studentIdPublicId?: string;
    verificationStatus: StudentVerificationStatus;
    verificationSubmittedAt?: Date;
    verificationReviewedAt?: Date;
    verificationRejectionReason?: string;
    verificationReviewedBy?: Types.ObjectId;
    campusCity: string;
    campusName: string;
    campusLatitude?: number;
    campusLongitude?: number;
    isSeekingRoommate: boolean;
    roommateMode?: 'have_room' | 'need_room' | null;
    roommateProfileId?: Types.ObjectId;
    isAmbassador: boolean;
    ambassadorCode?: string;
    ambassadorEarnings: number;
    referralCount: number;
    landlordReferralCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const StudentProfileSchema: import("mongoose").Schema<StudentProfile, import("mongoose").Model<StudentProfile, any, any, any, any, any, StudentProfile>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StudentProfile, Document<unknown, {}, StudentProfile, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    universityName?: import("mongoose").SchemaDefinitionProperty<string, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    faculty?: import("mongoose").SchemaDefinitionProperty<string | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studyLevel?: import("mongoose").SchemaDefinitionProperty<string | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    enrollmentYear?: import("mongoose").SchemaDefinitionProperty<number | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studentIdUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studentIdPublicId?: import("mongoose").SchemaDefinitionProperty<string | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    verificationStatus?: import("mongoose").SchemaDefinitionProperty<StudentVerificationStatus, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    verificationSubmittedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    verificationReviewedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    verificationRejectionReason?: import("mongoose").SchemaDefinitionProperty<string | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    verificationReviewedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campusCity?: import("mongoose").SchemaDefinitionProperty<string, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campusName?: import("mongoose").SchemaDefinitionProperty<string, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campusLatitude?: import("mongoose").SchemaDefinitionProperty<number | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campusLongitude?: import("mongoose").SchemaDefinitionProperty<number | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isSeekingRoommate?: import("mongoose").SchemaDefinitionProperty<boolean, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    roommateMode?: import("mongoose").SchemaDefinitionProperty<"have_room" | "need_room" | null | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    roommateProfileId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isAmbassador?: import("mongoose").SchemaDefinitionProperty<boolean, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ambassadorCode?: import("mongoose").SchemaDefinitionProperty<string | undefined, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ambassadorEarnings?: import("mongoose").SchemaDefinitionProperty<number, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    referralCount?: import("mongoose").SchemaDefinitionProperty<number, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    landlordReferralCount?: import("mongoose").SchemaDefinitionProperty<number, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, StudentProfile, Document<unknown, {}, StudentProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StudentProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, StudentProfile>;
