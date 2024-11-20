import { UserLoginInfo } from "@/models/UserLoginInfo";




export default class LocalStorage{

    /// implement singleton constructor
    private static instance: LocalStorage;
    private constructor() {
        // Make it non-enumerable and non-writable
        Object.defineProperty(this, 'constructor', { enumerable: false, writable: false });
    }

    // Implement the singleton pattern
    public static getInstance(): LocalStorage {
        if (!LocalStorage.instance) {
            LocalStorage.instance = new LocalStorage();
        }
        return LocalStorage.instance;
    }

    public addLoginInfo(loginInfo:UserLoginInfo):void {
        delete loginInfo.access_token;
        const info = JSON.stringify(loginInfo)
        localStorage.setItem("loginInfo", info)
    }
    public getRole():string {
        const info = localStorage.getItem("loginInfo");
        if(info){
            const loginInfo: UserLoginInfo = JSON.parse(info);
            return loginInfo.role;
        }
        return "NA";
    }

    public getLoginInfo():UserLoginInfo | null {
        const info = localStorage.getItem("loginInfo");
        if(info){
            return JSON.parse(info);
        }
        return null;
    }

    public removeLoginInfo():void {
        localStorage.removeItem("loginInfo")
    }


}