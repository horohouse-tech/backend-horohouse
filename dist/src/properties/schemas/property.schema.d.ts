import { Document, Types } from 'mongoose';
export type PropertyDocument = Property & Document;
export declare enum PropertyType {
    APARTMENT = "apartment",
    HOUSE = "house",
    VILLA = "villa",
    STUDIO = "studio",
    DUPLEX = "duplex",
    BUNGALOW = "bungalow",
    PENTHOUSE = "penthouse",
    LAND = "land",
    COMMERCIAL = "commercial",
    OFFICE = "office",
    SHOP = "shop",
    WAREHOUSE = "warehouse",
    HOTEL = "hotel",
    MOTEL = "motel",
    VACATION_RENTAL = "vacation_rental",
    GUESTHOUSE = "guesthouse",
    HOSTEL = "hostel",
    RESORT = "resort",
    SERVICED_APARTMENT = "serviced_apartment"
}
export declare enum PropertyStatus {
    ACTIVE = "active",
    SOLD = "sold",
    RENTED = "rented",
    PENDING = "pending",
    DRAFT = "draft"
}
export declare enum ApprovalStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected"
}
export declare enum ListingType {
    SALE = "sale",
    RENT = "rent",
    SHORT_TERM = "short_term"
}
export declare enum PricingUnit {
    NIGHTLY = "nightly",
    WEEKLY = "weekly",
    MONTHLY = "monthly"
}
export declare enum CancellationPolicy {
    FLEXIBLE = "flexible",
    MODERATE = "moderate",
    STRICT = "strict",
    NO_REFUND = "no_refund"
}
export declare enum WaterSource {
    CAMWATER = "camwater",
    BOREHOLE = "borehole",
    WELL = "well",
    TANKER = "tanker",
    CAMWATER_AND_BOREHOLE = "camwater_and_borehole"
}
export declare enum ElectricityBackup {
    NONE = "none",
    SOLAR = "solar",
    GENERATOR = "generator",
    SOLAR_AND_GENERATOR = "solar_and_generator"
}
export declare enum FurnishingStatus {
    UNFURNISHED = "unfurnished",
    SEMI_FURNISHED = "semi_furnished",
    FURNISHED = "furnished"
}
export declare enum GenderRestriction {
    NONE = "none",
    WOMEN_ONLY = "women_only",
    MEN_ONLY = "men_only"
}
export interface PropertyAmenities {
    bedrooms?: number;
    bathrooms?: number;
    parkingSpaces?: number;
    hasGarden?: boolean;
    hasPool?: boolean;
    hasGym?: boolean;
    hasSecurity?: boolean;
    hasElevator?: boolean;
    hasBalcony?: boolean;
    hasAirConditioning?: boolean;
    hasInternet?: boolean;
    hasGenerator?: boolean;
    furnished?: boolean;
}
export interface ShortTermAmenities {
    hasWifi?: boolean;
    hasBreakfast?: boolean;
    hasParking?: boolean;
    hasTv?: boolean;
    hasKitchen?: boolean;
    hasKitchenette?: boolean;
    hasWasher?: boolean;
    hasDryer?: boolean;
    hasAirConditioning?: boolean;
    hasHeating?: boolean;
    petsAllowed?: boolean;
    smokingAllowed?: boolean;
    partiesAllowed?: boolean;
    maxGuests?: number;
    checkInTime?: string;
    checkOutTime?: string;
    selfCheckIn?: boolean;
    wheelchairAccessible?: boolean;
    airportTransfer?: boolean;
    conciergeService?: boolean;
    dailyHousekeeping?: boolean;
}
export interface StudentDetails {
    campusProximityMeters?: number;
    nearestCampus?: string;
    walkingMinutes?: number;
    taxiMinutes?: number;
    waterSource?: WaterSource;
    electricityBackup?: ElectricityBackup;
    furnishingStatus?: FurnishingStatus;
    genderRestriction?: GenderRestriction;
    curfewTime?: string;
    visitorsAllowed?: boolean;
    cookingAllowed?: boolean;
    hasGatedCompound?: boolean;
    hasNightWatchman?: boolean;
    hasFence?: boolean;
    isStudentApproved?: boolean;
    maxAdvanceMonths?: number;
    acceptsRentAdvanceScheme?: boolean;
    availableBeds?: number;
    totalBeds?: number;
    pricePerPersonMonthly?: number;
}
export interface PropertyImages {
    url: string;
    publicId: string;
    caption?: string;
    isMain?: boolean;
}
export interface PropertyMediaItem {
    url: string;
    publicId: string;
    caption?: string;
}
export interface UnavailableDateRange {
    from: Date;
    to: Date;
    reason?: string;
}
export declare class Property {
    _id: Types.ObjectId;
    title: string;
    price: number;
    currency?: string;
    type: PropertyType;
    listingType: ListingType;
    description: string;
    city: string;
    address: string;
    state?: string;
    neighborhood?: string;
    country?: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
    latitude?: number;
    longitude?: number;
    images: PropertyImages[];
    videos: PropertyMediaItem[];
    amenities: PropertyAmenities;
    pricingUnit: PricingUnit;
    minNights: number;
    maxNights: number;
    cleaningFee: number;
    serviceFee: number;
    weeklyDiscountPercent: number;
    monthlyDiscountPercent: number;
    unavailableDates: UnavailableDateRange[];
    shortTermAmenities: ShortTermAmenities;
    isInstantBookable: boolean;
    cancellationPolicy: CancellationPolicy;
    advanceNoticeDays: number;
    bookingWindowDays: number;
    isStudentFriendly: boolean;
    studentDetails?: StudentDetails;
    ownerId: Types.ObjectId;
    agentId?: Types.ObjectId;
    area?: number;
    yearBuilt?: number;
    floorNumber?: number;
    totalFloors?: number;
    pricePerSqm?: number;
    depositAmount?: number;
    maintenanceFee?: number;
    contactPhone?: string;
    contactEmail?: string;
    keywords: string[];
    slug?: string;
    nearbyAmenities: string[];
    transportAccess: string[];
    viewsCount: number;
    inquiriesCount: number;
    favoritesCount: number;
    sharesCount: number;
    availability: PropertyStatus;
    approvalStatus: ApprovalStatus;
    rejectionReason?: string;
    isVerified: boolean;
    isFeatured: boolean;
    isActive: boolean;
    averageRating?: number;
    reviewCount?: number;
    starRating?: number;
    virtualTourUrl?: string;
    videoUrl?: string;
    tourType?: string;
    tourThumbnail?: string;
    tourViews: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PropertySchema: import("mongoose").Schema<Property, import("mongoose").Model<Property, any, any, any, any, any, Property>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Property, Document<unknown, {}, Property, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<PropertyType, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    listingType?: import("mongoose").SchemaDefinitionProperty<ListingType, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    city?: import("mongoose").SchemaDefinitionProperty<string, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: import("mongoose").SchemaDefinitionProperty<string, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    state?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    neighborhood?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<{
        type: string;
        coordinates: [number, number];
    }, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    latitude?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    longitude?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: import("mongoose").SchemaDefinitionProperty<PropertyImages[], Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    videos?: import("mongoose").SchemaDefinitionProperty<PropertyMediaItem[], Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amenities?: import("mongoose").SchemaDefinitionProperty<PropertyAmenities, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pricingUnit?: import("mongoose").SchemaDefinitionProperty<PricingUnit, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    minNights?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maxNights?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cleaningFee?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    serviceFee?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    weeklyDiscountPercent?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    monthlyDiscountPercent?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    unavailableDates?: import("mongoose").SchemaDefinitionProperty<UnavailableDateRange[], Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    shortTermAmenities?: import("mongoose").SchemaDefinitionProperty<ShortTermAmenities, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isInstantBookable?: import("mongoose").SchemaDefinitionProperty<boolean, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancellationPolicy?: import("mongoose").SchemaDefinitionProperty<CancellationPolicy, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    advanceNoticeDays?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bookingWindowDays?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isStudentFriendly?: import("mongoose").SchemaDefinitionProperty<boolean, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studentDetails?: import("mongoose").SchemaDefinitionProperty<StudentDetails | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ownerId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    area?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    yearBuilt?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    floorNumber?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalFloors?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pricePerSqm?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    depositAmount?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maintenanceFee?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contactPhone?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contactEmail?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    keywords?: import("mongoose").SchemaDefinitionProperty<string[], Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nearbyAmenities?: import("mongoose").SchemaDefinitionProperty<string[], Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    transportAccess?: import("mongoose").SchemaDefinitionProperty<string[], Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    viewsCount?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inquiriesCount?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    favoritesCount?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sharesCount?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    availability?: import("mongoose").SchemaDefinitionProperty<PropertyStatus, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    approvalStatus?: import("mongoose").SchemaDefinitionProperty<ApprovalStatus, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rejectionReason?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isVerified?: import("mongoose").SchemaDefinitionProperty<boolean, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isFeatured?: import("mongoose").SchemaDefinitionProperty<boolean, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageRating?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reviewCount?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    starRating?: import("mongoose").SchemaDefinitionProperty<number | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    virtualTourUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    videoUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tourType?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tourThumbnail?: import("mongoose").SchemaDefinitionProperty<string | undefined, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tourViews?: import("mongoose").SchemaDefinitionProperty<number, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Property, Document<unknown, {}, Property, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Property & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Property>;
