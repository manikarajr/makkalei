import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home/home').then(m => m.Home)
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services/services').then(m => m.Services)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio/portfolio').then(m => m.Portfolio)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about/about').then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact/contact').then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
