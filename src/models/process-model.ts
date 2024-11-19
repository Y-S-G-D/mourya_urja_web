export interface IProcessModel {
     isLoading: boolean;
     errorMsg: string  | null;
     isSuccess: boolean;
     successMsg: string | null;
     setErrorMsg: (msg: string) => void;
     setSuccess: (msg: string) => void;

    }