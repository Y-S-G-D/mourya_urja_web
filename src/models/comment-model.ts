export interface IComment {
    userId: string;
    userName: string;
    connectionId: string;
    comment: string;
    createdAt?: Date;
    updatedAt?: Date;
}