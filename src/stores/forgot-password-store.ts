import { ForgotStateEnum } from "@/utils/enums/forgot-state-enum"
import { create} from "zustand"

export interface IForgotState  {
      currentState: ForgotStateEnum,
      handleState: (state:ForgotStateEnum) => void,

}

export const  useForgotStateStore = create<IForgotState>((set) => ({
    currentState:ForgotStateEnum.SendMail,
    handleState:(state : ForgotStateEnum)=>{
        set({currentState:state})
    }
}))