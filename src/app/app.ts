import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  title = 'Makkalei - Web Development Company';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.initTheme();
  }
}
