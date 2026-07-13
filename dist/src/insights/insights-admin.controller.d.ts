import { FastifyRequest } from 'fastify';
import { InsightsAdminService } from './(JWT-guarded)/insights-admin.service';
import { CreatePostDto, UpdatePostDto, SchedulePostDto, ReviewPostDto, QueryPostsDto, CreateCategoryDto, CreateAuthorProfileDto } from './dto/insights.dto';
export declare class InsightsAdminController {
    private readonly adminService;
    constructor(adminService: InsightsAdminService);
    findAll(query: QueryPostsDto): Promise<{
        data: (import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
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
        topPosts: (import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        recentActivity: (import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    getAnalytics(params: any): Promise<{
        topByViews: (import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        recentPublished: (import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        viewsByCategory: any[];
    }>;
    create(dto: CreatePostDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").PostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    uploadCover(req: FastifyRequest): Promise<{
        url: any;
        publicId: any;
        width: any;
        height: any;
    }>;
    findOne(id: string): Promise<import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, dto: UpdatePostDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").PostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    publish(id: string, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").PostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    schedule(id: string, dto: SchedulePostDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").PostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    feature(id: string, isFeatured: boolean, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").PostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    review(id: string, dto: ReviewPostDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").PostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string, req: any): Promise<{
        message: string;
    }>;
    backfillSlugs(): Promise<{
        fixed: number;
        skipped: number;
    }>;
    getCategories(): Promise<(import("./schemas/category.schema").Category & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    createCategory(dto: CreateCategoryDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/category.schema").CategoryDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/category.schema").Category & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateCategory(id: string, dto: Partial<CreateCategoryDto>): Promise<import("mongoose").Document<unknown, {}, import("./schemas/category.schema").CategoryDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/category.schema").Category & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteCategory(id: string): Promise<{
        message: string;
    }>;
    getAllTags(params: any): Promise<{
        data: (import("./schemas/tag.schema").Tag & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        meta: {
            total: number;
            page: any;
            limit: any;
        };
    }>;
    createTag(name: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/tag.schema").TagDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/tag.schema").Tag & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteTag(id: string): Promise<{
        message: string;
    }>;
    getAuthors(params: any): Promise<{
        data: (import("./schemas/author-profile.schema").AuthorProfile & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        meta: {
            total: number;
            page: any;
            limit: any;
        };
    }>;
    createAuthor(dto: CreateAuthorProfileDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/author-profile.schema").AuthorProfileDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/author-profile.schema").AuthorProfile & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateAuthor(id: string, dto: Partial<CreateAuthorProfileDto>): Promise<import("mongoose").Document<unknown, {}, import("./schemas/author-profile.schema").AuthorProfileDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/author-profile.schema").AuthorProfile & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
