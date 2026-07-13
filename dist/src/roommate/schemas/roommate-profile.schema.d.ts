import { Document, Types } from 'mongoose';
export type RoommateProfileDocument = RoommateProfile & Document;
export declare enum SleepSchedule {
    EARLY_BIRD = "early_bird",
    NIGHT_OWL = "night_owl",
    FLEXIBLE = "flexible"
}
export declare enum CleanlinessLevel {
    VERY_NEAT = "very_neat",
    NEAT = "neat",
    RELAXED = "relaxed"
}
export declare enum SocialHabit {
    INTROVERTED = "introverted",
    BALANCED = "balanced",
    SOCIAL = "social"
}
export declare enum StudyHabit {
    HOME_STUDIER = "home_studier",
    LIBRARY_GOER = "library_goer",
    MIXED = "mixed"
}
export declare enum RoommateMode {
    HAVE_ROOM = "have_room",
    NEED_ROOM = "need_room"
}
export declare enum MatchStatus {
    PENDING = "pending",
    MATCHED = "matched",
    REJECTED = "rejected",
    EXPIRED = "expired"
}
export declare class RoommateProfile {
    userId: Types.ObjectId;
    studentProfileId: Types.ObjectId;
    mode: RoommateMode;
    propertyId?: Types.ObjectId;
    campusCity: string;
    preferredNeighborhood?: string;
    budgetPerPersonMax: number;
    budgetPerPersonMin: number;
    moveInDate: Date;
    moveInFlexibilityDays: number;
    sleepSchedule: SleepSchedule;
    cleanlinessLevel: CleanlinessLevel;
    socialHabit: SocialHabit;
    studyHabit: StudyHabit;
    isSmoker: boolean;
    acceptsSmoker: boolean;
    hasPet: boolean;
    acceptsPet: boolean;
    preferredRoommateGender: 'male' | 'female' | 'any';
    bio?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const RoommateProfileSchema: import("mongoose").Schema<RoommateProfile, import("mongoose").Model<RoommateProfile, any, any, any, any, any, RoommateProfile>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoommateProfile, Document<unknown, {}, RoommateProfile, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studentProfileId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mode?: import("mongoose").SchemaDefinitionProperty<RoommateMode, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertyId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campusCity?: import("mongoose").SchemaDefinitionProperty<string, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    preferredNeighborhood?: import("mongoose").SchemaDefinitionProperty<string | undefined, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    budgetPerPersonMax?: import("mongoose").SchemaDefinitionProperty<number, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    budgetPerPersonMin?: import("mongoose").SchemaDefinitionProperty<number, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    moveInDate?: import("mongoose").SchemaDefinitionProperty<Date, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    moveInFlexibilityDays?: import("mongoose").SchemaDefinitionProperty<number, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sleepSchedule?: import("mongoose").SchemaDefinitionProperty<SleepSchedule, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cleanlinessLevel?: import("mongoose").SchemaDefinitionProperty<CleanlinessLevel, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    socialHabit?: import("mongoose").SchemaDefinitionProperty<SocialHabit, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studyHabit?: import("mongoose").SchemaDefinitionProperty<StudyHabit, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isSmoker?: import("mongoose").SchemaDefinitionProperty<boolean, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    acceptsSmoker?: import("mongoose").SchemaDefinitionProperty<boolean, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hasPet?: import("mongoose").SchemaDefinitionProperty<boolean, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    acceptsPet?: import("mongoose").SchemaDefinitionProperty<boolean, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    preferredRoommateGender?: import("mongoose").SchemaDefinitionProperty<"any" | "male" | "female", RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string | undefined, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, RoommateProfile, Document<unknown, {}, RoommateProfile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoommateProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, RoommateProfile>;
