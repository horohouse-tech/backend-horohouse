import { Model, Types } from 'mongoose';
import { Post, PostDocument } from '../schemas/post.schema';
import { Category, CategoryDocument } from '../schemas/category.schema';
import { Tag, TagDocument } from '../schemas/tag.schema';
import { AuthorProfile, AuthorProfileDocument } from '../schemas/author-profile.schema';
import { CreatePostDto, UpdatePostDto, SchedulePostDto, ReviewPostDto, QueryPostsDto, CreateCategoryDto, CreateAuthorProfileDto } from '../dto/insights.dto';
import { InsightsSeoService } from './insights-seo.service';
export declare class InsightsAdminService {
    private postModel;
    private categoryModel;
    private tagModel;
    private authorModel;
    private seoService;
    constructor(postModel: Model<PostDocument>, categoryModel: Model<CategoryDocument>, tagModel: Model<TagDocument>, authorModel: Model<AuthorProfileDocument>, seoService: InsightsSeoService);
    findAll(query: QueryPostsDto): Promise<{
        data: (Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getStats(): Promise<{
        total: number;
        published: number;
        draft: number;
        review: number;
        scheduled: number;
        featured: number;
        trending: number;
        topPosts: (Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        recentActivity: (Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    findById(id: string): Promise<Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    create(dto: CreatePostDto, editorUserId: string): Promise<import("mongoose").Document<unknown, {}, PostDocument, {}, import("mongoose").DefaultSchemaOptions> & Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdatePostDto, editorUserId: string): Promise<import("mongoose").Document<unknown, {}, PostDocument, {}, import("mongoose").DefaultSchemaOptions> & Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    publish(id: string, editorUserId: string): Promise<import("mongoose").Document<unknown, {}, PostDocument, {}, import("mongoose").DefaultSchemaOptions> & Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    schedule(id: string, dto: SchedulePostDto, editorUserId: string): Promise<import("mongoose").Document<unknown, {}, PostDocument, {}, import("mongoose").DefaultSchemaOptions> & Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    toggleFeatured(id: string, isFeatured: boolean, editorUserId: string): Promise<import("mongoose").Document<unknown, {}, PostDocument, {}, import("mongoose").DefaultSchemaOptions> & Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    reviewSubmission(id: string, dto: ReviewPostDto, editorUserId: string): Promise<import("mongoose").Document<unknown, {}, PostDocument, {}, import("mongoose").DefaultSchemaOptions> & Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    delete(id: string, editorUserId: string): Promise<{
        message: string;
    }>;
    backfillSlugs(): Promise<{
        fixed: number;
        skipped: number;
    }>;
    uploadCover(file: Express.Multer.File): Promise<{
        url: any;
        publicId: any;
        width: any;
        height: any;
    }>;
    getAnalytics(params: any): Promise<{
        topByViews: (Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        recentPublished: (Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        viewsByCategory: any[];
    }>;
    createCategory(dto: CreateCategoryDto): Promise<import("mongoose").Document<unknown, {}, CategoryDocument, {}, import("mongoose").DefaultSchemaOptions> & Category & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateCategory(id: string, dto: Partial<CreateCategoryDto>): Promise<import("mongoose").Document<unknown, {}, CategoryDocument, {}, import("mongoose").DefaultSchemaOptions> & Category & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteCategory(id: string): Promise<{
        message: string;
    }>;
    getAllCategories(): Promise<(Category & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getAllTags(params: any): Promise<{
        data: (Tag & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        meta: {
            total: number;
            page: any;
            limit: any;
        };
    }>;
    createTag(name: string): Promise<import("mongoose").Document<unknown, {}, TagDocument, {}, import("mongoose").DefaultSchemaOptions> & Tag & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteTag(id: string): Promise<{
        message: string;
    }>;
    getAuthors(params: any): Promise<{
        data: (AuthorProfile & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        meta: {
            total: number;
            page: any;
            limit: any;
        };
    }>;
    createAuthorProfile(dto: CreateAuthorProfileDto): Promise<import("mongoose").Document<unknown, {}, AuthorProfileDocument, {}, import("mongoose").DefaultSchemaOptions> & AuthorProfile & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateAuthorProfile(id: string, dto: Partial<CreateAuthorProfileDto>): Promise<import("mongoose").Document<unknown, {}, AuthorProfileDocument, {}, import("mongoose").DefaultSchemaOptions> & AuthorProfile & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
