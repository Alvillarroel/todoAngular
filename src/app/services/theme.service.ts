import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private custom: Theme;

  constructor() {
    this.custom = 'dark';
  }

  
  public get theme() {
    return this.custom;
  }

  
  public setTheme(v : Theme) {
    this.custom = v;
  }
  
  
}
