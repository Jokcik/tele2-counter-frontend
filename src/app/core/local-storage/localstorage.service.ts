import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {
  public static TOKEN_FIELD = 'tj-token';

  constructor() {
  }

  setItem(key: string, value: string, saveSession: boolean = true) {
    if (saveSession) {
      localStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }
  }

  getItem(key: string): string {
    return sessionStorage.getItem(key) || localStorage.getItem(key);
  }

  removeItem(key: string) {
    sessionStorage.getItem(key);
    localStorage.removeItem(key);
  }

  public removeToken() {
    this.removeItem(LocalStorageService.TOKEN_FIELD);
  }

  public getToken():string {
    return this.getItem(LocalStorageService.TOKEN_FIELD);
  }

  public setToken(token: string, saveSession: boolean = true) {
    this.setItem(LocalStorageService.TOKEN_FIELD, token, saveSession);
  }
}
