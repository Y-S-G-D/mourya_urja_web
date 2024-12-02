export interface IComment {
    userId: string;
    connectionId: string;
    comment: string;
    createdAt?: Date;
    updatedAt?: Date;
}