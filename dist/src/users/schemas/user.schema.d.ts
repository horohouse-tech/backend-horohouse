import { Document, Types } from 'mongoose';
export type UserDocument = User & Document;
export declare enum UserRole {
    ADMIN = "admin",
    AGENT = "agent",
    LANDLORD = "landlord",
    HOST = "host",
    REGISTERED_USER = "registered_user",
    GUEST = "guest",
    STUDENT = "student"
}
export declare enum HostVerificationStatus {
    UNVERIFIED = "unverified",
    PENDING = "pending",
    VERIFIED = "verified",
    REJECTED = "rejected"
}
export declare enum PayoutMethod {
    MOBILE_MONEY = "mobile_money",
    BANK_TRANSFER = "bank_transfer",
    PAYPAL = "paypal"
}
export interface HostPayoutAccount {
    method: PayoutMethod;
    accountIdentifier: string;
    providerName?: string;
    isDefault: boolean;
    currency: string;
}
export interface PushToken {
    token: string;
    platform: 'ios' | 'android';
    deviceId?: string;
    updatedAt: Date;
}
export interface HostPayoutRecord {
    _id?: Types.ObjectId;
    amount: number;
    currency: string;
    method: PayoutMethod;
    reference?: string;
    status: 'pending' | 'processing' | 'paid' | 'failed';
    initiatedAt: Date;
    completedAt?: Date;
    failureReason?: string;
}
export interface HostProfile {
    verificationStatus: HostVerificationStatus;
    governmentIdUrl?: string;
    governmentIdPublicId?: string;
    verificationSubmittedAt?: Date;
    verificationReviewedAt?: Date;
    verificationRejectionReason?: string;
    isSuperhost: boolean;
    superhostSince?: Date;
    instantBookEnabled: boolean;
    minNightsDefault: number;
    maxNightsDefault: number;
    advanceNoticeHours: number;
    bookingWindowMonths: number;
    responseRate?: number;
    responseTimeMinutes?: number;
    totalEarnings: number;
    currentMonthEarnings: number;
    completedStays: number;
    commissionRate: number;
    payoutAccounts: HostPayoutAccount[];
    payoutHistory: HostPayoutRecord[];
    petsAllowedDefault: boolean;
    smokingAllowedDefault: boolean;
    eventsAllowedDefault: boolean;
    checkInTimeDefault?: string;
    checkOutTimeDefault?: string;
    coHostIds: Types.ObjectId[];
    hostBio?: string;
    hostLanguages: string[];
    operatingCity?: string;
}
export declare enum StudentVerificationStatus {
    UNVERIFIED = "unverified",
    PENDING = "pending",
    VERIFIED = "verified",
    REJECTED = "rejected"
}
export interface StudentProfile {
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
    campusCity: string;
    campusLatitude?: number;
    campusLongitude?: number;
    roommateProfileId?: Types.ObjectId;
    ambassadorCode?: string;
    isAmbassador: boolean;
    ambassadorEarnings?: number;
}
export type TenantStatus = 'active' | 'ended' | 'pending';
export interface TenantRecord {
    _id?: Types.ObjectId;
    tenantName: string;
    tenantEmail?: string;
    tenantPhone?: string;
    tenantUserId?: Types.ObjectId;
    propertyId: Types.ObjectId;
    leaseStart: Date;
    leaseEnd: Date;
    monthlyRent: number;
    depositAmount?: number;
    status: TenantStatus;
    notes?: string;
}
export interface UserPreferences {
    minPrice?: number;
    maxPrice?: number;
    currency?: string;
    propertyTypes?: string[];
    cities?: string[];
    amenities?: string[];
    bedrooms?: number[];
    bathrooms?: number[];
    maxRadius?: number;
    minArea?: number;
    maxArea?: number;
    preferredLocation?: {
        type: 'Point';
        coordinates: [number, number];
    };
}
export interface AgentPreferences {
    licenseNumber?: string;
    agency?: string;
    experience?: number;
    specializations?: string[];
    serviceAreas?: string[];
    commissionRate?: number;
    propertyPriceRange?: {
        min: number;
        max: number;
        currency: string;
    };
}
export interface SearchQuery {
    query: string;
    filters: any;
    location?: {
        type: 'Point';
        coordinates: [number, number];
    };
    timestamp: Date;
    resultsCount: number;
}
export interface UserSession {
    id: string;
    refreshToken: string;
    device: string;
    ipAddress: string;
    userAgent: string;
    location?: string;
    isActive: boolean;
    lastActive: Date;
    createdAt: Date;
    expiresAt: Date;
}
export declare class User {
    name: string;
    email?: string;
    phoneNumber: string;
    role: UserRole;
    profilePicture?: string;
    favorites: Types.ObjectId[];
    preferences: UserPreferences;
    searchHistory: SearchQuery[];
    recentlyViewed: Array<{
        propertyId: Types.ObjectId;
        viewedAt: Date;
    }>;
    isActive: boolean;
    specialties?: string[];
    languages?: string[];
    serviceAreas?: string[];
    emailVerified: boolean;
    phoneVerified: boolean;
    googleId?: string;
    password?: string;
    averageRating?: number;
    reviewCount?: number;
    phoneVerificationCode?: string;
    phoneVerificationExpires?: Date;
    emailVerificationToken?: string;
    emailVerificationExpires?: Date;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    twoFactorEnabled?: boolean;
    twoFactorSecret?: string;
    sessions: UserSession[];
    licenseNumber?: string;
    agency?: string;
    bio?: string;
    website?: string;
    propertiesListed?: number;
    propertiesSold?: number;
    tenants: TenantRecord[];
    totalRentalIncome?: number;
    occupancyRate?: number;
    hostProfile?: HostProfile;
    studentProfile?: StudentProfile;
    emailNotifications: boolean;
    smsNotifications: boolean;
    pushNotifications: boolean;
    pushTokens: PushToken[];
    location?: {
        type: 'Point';
        coordinates: [number, number];
    };
    address?: string;
    city?: string;
    country?: string;
    onboardingCompleted?: boolean;
    agentPreferences?: AgentPreferences;
    createdAt: Date;
    updatedAt: Date;
    _id: Types.ObjectId;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, any, any, User>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, User, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phoneNumber?: import("mongoose").SchemaDefinitionProperty<string, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    role?: import("mongoose").SchemaDefinitionProperty<UserRole, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profilePicture?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    favorites?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    preferences?: import("mongoose").SchemaDefinitionProperty<UserPreferences, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    searchHistory?: import("mongoose").SchemaDefinitionProperty<SearchQuery[], User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    recentlyViewed?: import("mongoose").SchemaDefinitionProperty<{
        propertyId: Types.ObjectId;
        viewedAt: Date;
    }[], User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    specialties?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    languages?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    serviceAreas?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    emailVerified?: import("mongoose").SchemaDefinitionProperty<boolean, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phoneVerified?: import("mongoose").SchemaDefinitionProperty<boolean, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    googleId?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    password?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageRating?: import("mongoose").SchemaDefinitionProperty<number | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reviewCount?: import("mongoose").SchemaDefinitionProperty<number | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phoneVerificationCode?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phoneVerificationExpires?: import("mongoose").SchemaDefinitionProperty<Date | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    emailVerificationToken?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    emailVerificationExpires?: import("mongoose").SchemaDefinitionProperty<Date | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    resetPasswordToken?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    resetPasswordExpires?: import("mongoose").SchemaDefinitionProperty<Date | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    twoFactorEnabled?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    twoFactorSecret?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sessions?: import("mongoose").SchemaDefinitionProperty<UserSession[], User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    licenseNumber?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agency?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    website?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesListed?: import("mongoose").SchemaDefinitionProperty<number | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    propertiesSold?: import("mongoose").SchemaDefinitionProperty<number | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tenants?: import("mongoose").SchemaDefinitionProperty<TenantRecord[], User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalRentalIncome?: import("mongoose").SchemaDefinitionProperty<number | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    occupancyRate?: import("mongoose").SchemaDefinitionProperty<number | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hostProfile?: import("mongoose").SchemaDefinitionProperty<HostProfile | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studentProfile?: import("mongoose").SchemaDefinitionProperty<StudentProfile | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    emailNotifications?: import("mongoose").SchemaDefinitionProperty<boolean, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    smsNotifications?: import("mongoose").SchemaDefinitionProperty<boolean, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pushNotifications?: import("mongoose").SchemaDefinitionProperty<boolean, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pushTokens?: import("mongoose").SchemaDefinitionProperty<PushToken[], User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<{
        type: "Point";
        coordinates: [number, number];
    } | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    city?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    onboardingCompleted?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agentPreferences?: import("mongoose").SchemaDefinitionProperty<AgentPreferences | undefined, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, User, Document<unknown, {}, User, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<User & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, User>;
