import { Injectable, signal, PLATFORM_ID, inject, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  isDarkMode = signal<boolean>(false);

  constructor() {
    // Apply theme changes reactively
    if (this.isBrowser) {
      effect(() => {
        const isDark = this.isDarkMode();
        if (isDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  initTheme() {
    if (!this.isBrowser) {
      return;
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.isDarkMode.set(shouldBeDark);
  }

  toggleTheme() {
    this.isDarkMode.update(current => !current);
  }
}