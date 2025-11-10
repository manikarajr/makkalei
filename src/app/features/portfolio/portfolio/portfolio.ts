import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
selectedCategory = signal('All');
  
  categories = ['All', 'Web Development', 'E-Commerce', 'Mobile App', 'UI/UX Design'];

  projects = [
    {
      title: 'TechCorp Website Redesign',
      description: 'Complete website redesign with modern UI/UX and improved performance.',
      category: 'Web Development',
      tags: ['Angular', 'Tailwind', 'TypeScript'],
      year: '2024'
    },
    {
      title: 'ShopEasy E-Commerce Platform',
      description: 'Full-featured online store with payment integration and inventory management.',
      category: 'E-Commerce',
      tags: ['React', 'Node.js', 'Stripe'],
      year: '2024'
    },
    {
      title: 'FinanceApp Dashboard',
      description: 'Intuitive financial dashboard with real-time data visualization.',
      category: 'Web Development',
      tags: ['Vue.js', 'Chart.js', 'REST API'],
      year: '2023'
    },
    {
      title: 'HealthTrack Mobile App',
      description: 'Health and fitness tracking application with personalized recommendations.',
      category: 'Mobile App',
      tags: ['React Native', 'Firebase', 'Redux'],
      year: '2024'
    },
    {
      title: 'Restaurant Menu System',
      description: 'Digital menu and ordering system for modern restaurants.',
      category: 'Web Development',
      tags: ['Angular', 'MongoDB', 'Express'],
      year: '2023'
    },
    {
      title: 'Fashion Store Online',
      description: 'Luxury fashion e-commerce platform with virtual try-on features.',
      category: 'E-Commerce',
      tags: ['Next.js', 'Shopify', 'AR.js'],
      year: '2024'
    },
    {
      title: 'Portfolio Redesign Project',
      description: 'Creative portfolio website for a design agency.',
      category: 'UI/UX Design',
      tags: ['Figma', 'Webflow', 'Animation'],
      year: '2023'
    },
    {
      title: 'Property Management Portal',
      description: 'Comprehensive property management system with tenant portal.',
      category: 'Web Development',
      tags: ['Angular', 'PostgreSQL', 'AWS'],
      year: '2024'
    },
    {
      title: 'BookStore E-Commerce',
      description: 'Online bookstore with advanced search and recommendation engine.',
      category: 'E-Commerce',
      tags: ['React', 'GraphQL', 'Elasticsearch'],
      year: '2023'
    }
  ];

  filteredProjects() {
    if (this.selectedCategory() === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory());
  }
}
