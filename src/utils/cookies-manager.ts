import Cookies from "js-cookie";
export class CookiesManger{
    private static instance: CookiesManger;
    private constructor() {
        // Make it non-enumerable and non-writable
        Object.defineProperty(this, 'constructor', { enumerable: false, writable: false });
    }

    // Implement the singleton pattern
    public static getInstance(): CookiesManger {
        if (!CookiesManger.instance) {
            CookiesManger.instance = new CookiesManger();
        }
        return CookiesManger.instance;
    }

    public setCookie(key:string,value:string):void {
        Cookies.set(key,value);
    }

    public getCookie(key:string): string | undefined {
        return Cookies.get(key);
    }

    public removeCookie(key:string): void {
        Cookies.remove(key);
    }

    public clearAllCookies(): void {
        const allCookies = Cookies.get();
        for (const cookie in allCookies) {
            if (allCookies.hasOwnProperty(cookie)) {
                Cookies.remove(cookie);
            }
        }
    }
}