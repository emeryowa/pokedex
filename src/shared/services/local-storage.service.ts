import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage: Storage;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  get(key): any {

    if (!this.isSupported()) {
      return null;
    }

    try {
      const item = this.localStorage.getItem(key);

      if (item) {
        return JSON.parse(item);
      }

      return null;

    } catch (e) {
      console.log(e);
    }
  }

  set(key: string, data: any): void {

    if (!this.isSupported()) {
      return;
    }

    try {
      const item = JSON.stringify(data);
      localStorage.setItem(key, item);

    } catch (e) {
      console.log(e);
    }
  }

  remove(key: string): void {

    if (!this.isSupported()) {
      return;
    }

    try {
      this.localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  isSupported(): boolean {
    return !!this.localStorage;
  }
}
