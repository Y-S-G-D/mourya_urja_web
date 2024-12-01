import { IUser } from "./user-model";

export interface ConnectionModel {
    _id: string
    userId: string;
    targetUserId: string;
    user:IUser;
    createdAt?: Date;
    updatedAt?: Date;
  }

