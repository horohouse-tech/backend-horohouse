import { Model, Types } from 'mongoose';
import { Conversation, ConversationDocument, ParticipantInfo } from './schemas/conversation.schema';
import { Message, MessageDocument, MessageStatus } from './schemas/message.schema';
import { PropertyDocument } from '../properties/schemas/property.schema';
import { UserDocument } from '../users/schemas/user.schema';
import { CreateConversationDto, SendMessageDto, GetMessagesQueryDto, GetConversationsQueryDto, EditMessageDto } from './dto/chat.dto';
export declare class ChatService {
    private conversationModel;
    private messageModel;
    private propertyModel;
    private userModel;
    private readonly logger;
    constructor(conversationModel: Model<ConversationDocument>, messageModel: Model<MessageDocument>, propertyModel: Model<PropertyDocument>, userModel: Model<UserDocument>);
    createConversation(userId: string, dto: CreateConversationDto): Promise<Conversation>;
    private findExistingConversation;
    getConversations(userId: string, query: GetConversationsQueryDto): Promise<{
        conversations: {
            unreadCount: number;
            otherUser: Types.ObjectId | undefined;
            _id: Types.ObjectId;
            participants: ParticipantInfo[];
            propertyId?: Types.ObjectId;
            lastMessage?: import("./schemas/conversation.schema").LastMessage;
            messagesCount: number;
            typingUsers: Map<string, boolean>;
            onlineStatus: Map<string, string>;
            isArchived: boolean;
            archivedAt?: Date;
            archivedBy: Types.ObjectId[];
            isBlocked: boolean;
            blockedBy?: Types.ObjectId;
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
    getConversation(conversationId: string, userId: string): Promise<Conversation>;
    sendMessage(userId: string, dto: SendMessageDto): Promise<Message>;
    getMessages(conversationId: string, userId: string, query: GetMessagesQueryDto): Promise<{
        messages: (Message & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        totalPages: number;
        hasMore: boolean;
    }>;
    markMessagesAsRead(conversationId: string, userId: string, messageIds: string[]): Promise<void>;
    updateMessageStatus(messageId: string, status: MessageStatus): Promise<void>;
    editMessage(messageId: string, userId: string, dto: EditMessageDto): Promise<Message>;
    deleteMessage(messageId: string, userId: string): Promise<void>;
    archiveConversation(conversationId: string, userId: string, archive: boolean): Promise<Conversation>;
    deleteConversation(conversationId: string, userId: string): Promise<void>;
    getUnreadCount(userId: string): Promise<number>;
    updateTypingIndicator(conversationId: string, userId: string, isTyping: boolean): Promise<void>;
    updateOnlineStatus(userId: string, status: 'online' | 'offline' | 'away'): Promise<void>;
}
