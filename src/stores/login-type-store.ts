import { UserType } from '@/utils/enums/userType-enum'
import {create} from 'zustand'

export interface ILoginTypeStore{
    loginTypes: UserType[],
    selectedLoginType: UserType,
    setLoginType: (type: UserType) => void;
}

export const useLoginTypeStore = create<ILoginTypeStore>((set,) => ({
    loginTypes: [
        UserType.User,
        UserType.Admin,
        UserType.Management
    ],
    selectedLoginType: UserType.User,
    setLoginType: (type: UserType) => {
        set({ selectedLoginType: type })
    }
}));