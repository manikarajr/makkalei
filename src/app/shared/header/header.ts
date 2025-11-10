import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';



@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
isMobileMenuOpen = false;
  isDarkMode = computed(() => this.themeService.isDarkMode());

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
