import Cookies from "js-cookie";
import { jwtVerify, } from "jose";
export class CookiesManger {
  private static instance: CookiesManger;

  private constructor() {
    // Make it non-enumerable and non-writable
    Object.defineProperty(this, "constructor", {
      enumerable: false,
      writable: false,
    });
  }

  // Implement the singleton pattern
  public static getInstance(): CookiesManger {
    if (!CookiesManger.instance) {
      CookiesManger.instance = new CookiesManger();
    }
    return CookiesManger.instance;
  }

  public setCookie(key: string, value: string): void {
    Cookies.set(key, value);
  }

  public getCookie(key: string): string | undefined {
    return Cookies.get(key);
  }

  public removeCookie(key: string): void {
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

  public async verifyToken(token: string): Promise<boolean> {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      if (!secret)
        throw new Error("JWT_SECRET is not defined in environment variables.");
      const payload = await jwtVerify(token, secret);
      console.log(payload);
      return true;
    }catch (err) { // Use 'any' for error as `jose` errors don't have specific types
        console.log(err)
        return false;
      }
  }
}
