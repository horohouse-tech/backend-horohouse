import { ChatService } from './chat.service';
import { CallService } from './call.service';
import { CreateConversationDto, SendMessageDto, GetMessagesQueryDto, GetConversationsQueryDto, EditMessageDto, MarkAsReadDto, ArchiveConversationDto } from './dto/chat.dto';
import { InitiateCallDto } from './dto/call.dto';
export declare class ChatController {
    private readonly chatService;
    private readonly callService;
    constructor(chatService: ChatService, callService: CallService);
    createConversation(req: any, dto: CreateConversationDto): Promise<import("./schemas/conversation.schema").Conversation>;
    getConversations(req: any, query: GetConversationsQueryDto): Promise<{
        conversations: {
            unreadCount: number;
            otherUser: import("mongoose").Types.ObjectId | undefined;
            _id: import("mongoose").Types.ObjectId;
            participants: import("./schemas/conversation.schema").ParticipantInfo[];
            propertyId?: import("mongoose").Types.ObjectId;
            lastMessage?: import("./schemas/conversation.schema").LastMessage;
            messagesCount: number;
            typingUsers: Map<string, boolean>;
            onlineStatus: Map<string, string>;
            isArchived: boolean;
            archivedAt?: Date;
            archivedBy: import("mongoose").Types.ObjectId[];
            isBlocked: boolean;
            blockedBy?: import("mongoose").Types.ObjectId;
            blockedAt?: Date;
            metadata?: Record<string, any>;
            createdAt: Date;
            updatedAt: Date;
            $locals: Record<string, unknown>;
            $op: "save" | "validate" | "remove" | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            isNew: boolean;
            schema: import("mongoose").Schema;
            __v: number;
        }[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    getConversation(req: any, id: string): Promise<import("./schemas/conversation.schema").Conversation>;
    archiveConversation(req: any, id: string, dto: ArchiveConversationDto): Promise<import("./schemas/conversation.schema").Conversation>;
    deleteConversation(req: any, id: string): Promise<{
        message: string;
    }>;
    sendMessage(req: any, dto: SendMessageDto): Promise<import("./schemas/message.schema").Message>;
    sendMessageWithAttachments(req: any, dto: SendMessageDto, files: Express.Multer.File[]): Promise<import("./schemas/message.schema").Message>;
    getMessages(req: any, conversationId: string, query: GetMessagesQueryDto): Promise<{
        messages: (import("./schemas/message.schema").Message & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        totalPages: number;
        hasMore: boolean;
    }>;
    markMessagesAsRead(req: any, dto: MarkAsReadDto & {
        conversationId: string;
    }): Promise<{
        message: string;
    }>;
    editMessage(req: any, messageId: string, dto: EditMessageDto): Promise<import("./schemas/message.schema").Message>;
    deleteMessage(req: any, messageId: string): Promise<{
        message: string;
    }>;
    getUnreadCount(req: any): Promise<{
        unreadCount: number;
    }>;
    getConversationCallHistory(req: any, conversationId: string, limit?: number): Promise<import("./schemas/call.schema").Call[]>;
    getUserCallHistory(req: any, limit?: number): Promise<import("./schemas/call.schema").Call[]>;
    getCall(id: string): Promise<import("./schemas/call.schema").Call>;
    initiateCall(req: any, dto: InitiateCallDto): Promise<import("./schemas/call.schema").Call>;
}
