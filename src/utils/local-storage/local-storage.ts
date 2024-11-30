import { UserLoginInfo } from "@/models/UserLoginInfo";

export default class LocalStorage {
  /// implement singleton constructor
  private static instance: LocalStorage;
  private constructor() {
    // Make it non-enumerable and non-writable
    Object.defineProperty(this, "constructor", {
      enumerable: false,
      writable: false,
    });
  }

  // Implement the singleton pattern
  public static getInstance(): LocalStorage {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
    }
    return LocalStorage.instance;
  }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== "undefined" && typeof localStorage !== "undefined";
  }

  public addLoginInfo(loginInfo: UserLoginInfo): void {
    if (this.isLocalStorageAvailable()) {
      delete loginInfo.access_token;
      const info = JSON.stringify(loginInfo);
      localStorage.setItem("loginInfo", info);
    } else {
      console.log("localStorage is not available.");
    }
  }

  public getRole(): string {
    if (this.isLocalStorageAvailable()) {
      const info = localStorage.getItem("loginInfo");
      if (info) {
        const loginInfo: UserLoginInfo = JSON.parse(info);
        return loginInfo.role;
      }
    } else {
      console.warn("localStorage is not available.");
    }
    return "NA";
  }

  public getLoginInfo(): UserLoginInfo | null {
    if (this.isLocalStorageAvailable()) {
      const info = localStorage.getItem("loginInfo");
      if (info) {
        return JSON.parse(info);
      }
    }

    return null;
  }

  public removeLoginInfo(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem("loginInfo");
    } else {
      console.log("localStorage is not available.");
    }
  }
}
