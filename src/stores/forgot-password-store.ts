// import { ForgotStateEnum } from "@/utils/enums/forgot-state-enum"
import { create} from "zustand"
import apiClient from "@/lib/axiosInstance"; // Adjust the import path as necessary
import { forgotPassword, resetPassword } from "@/shared/endpoints";

// export interface IForgotState  {
//       currentState: ForgotStateEnum,
//       handleState: (state:ForgotStateEnum) => void,

// }



// export const  useForgotStateStore = create<IForgotState>((set) => ({
//     currentState:ForgotStateEnum.SendMail,
//     handleState:(state : ForgotStateEnum)=>{
//         set({currentState:state})
//     }
// }))

interface IForgotPassowordStore {
    isProcessing: boolean;
    errMsg: string;
    successMsg: string;
    showSuccess: boolean;
    showErr: boolean;
    handleDialog: () => void;
    sendEmail: (email: string) => Promise<void>;
    changePassword: (newPassword:string , token:string) => Promise<void>;
}
export const useForgotPasswordStore = create<IForgotPassowordStore>((set) => ({
    isProcessing: false,
    successMsg: '',
    errMsg: '',
    showSuccess: false,
    showErr: false,
    handleDialog: () => {
        set({ showSuccess: false, showErr: false });
    },

    sendEmail: async (email) => {
        try {
            set({ isProcessing: true });
            console.log(email)
            const response = await apiClient.post(forgotPassword, { email });
            if (response.status === 200) {
                set({ successMsg: ` We have sent a password reset link to your registered email address. Kindly check your inbox and follow the instructions to reset your password.`,isProcessing:false ,showSuccess:true ,showErr:false });
                  
            }
           
        } catch (error) {
            const e = error as Error
            console.log(e)
            set({ errMsg: e.message ?? "Something went wrong:(",isProcessing:false ,successMsg:'' ,showSuccess:false, showErr:true });
            
        }
        // set({ isProcessing: true });
        // console.log(email)
        // set({ isProcessing: false });
    },
    changePassword: async (newPassword,token) => {
        try {
            set({isProcessing:true,showSuccess:false,showErr:false,successMsg:'',errMsg:''})
            const response = await apiClient.patch(resetPassword,{"password":newPassword,"token":token})
            if(response.status === 200){
                set({ successMsg: response.data.message,isProcessing:false,showSuccess:true,showErr:false });
            }
        } catch (error) {
            const e = error as Error
            console.log(e)
            set({ errMsg: e.message ?? "Something went wrong:(",isProcessing:false ,successMsg:'' ,showSuccess:false, showErr:true });
            
        }

    }
}))

