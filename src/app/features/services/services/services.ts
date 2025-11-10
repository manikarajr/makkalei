import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
services = [
    {
      category: 'Development',
      title: 'Custom Web Development',
      description: 'We create tailor-made web applications using the latest technologies and frameworks. Our solutions are built to scale, perform, and provide exceptional user experiences.',
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'Server-Side Rendering (SSR)',
        'RESTful & GraphQL APIs',
        'Database Design & Optimization',
        'Third-party Integrations'
      ],
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      category: 'Design',
      title: 'UI/UX Design',
      description: 'We craft beautiful, intuitive interfaces that users love. Our design process focuses on creating engaging experiences that drive conversions and user satisfaction.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive & Mobile-First Design',
        'Accessibility Compliance',
        'Design System Creation'
      ],
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },
    {
      category: 'E-Commerce',
      title: 'E-Commerce Solutions',
      description: 'Build powerful online stores that drive sales and provide seamless shopping experiences. From product catalogs to payment processing, we handle it all.',
      features: [
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing & Tracking',
        'Product Recommendations',
        'Multi-currency Support'
      ],
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      category: 'Support',
      title: 'Maintenance & Support',
      description: 'Keep your website running smoothly with our comprehensive maintenance and support services. We provide regular updates, security patches, and performance optimization.',
      features: [
        'Regular Updates & Patches',
        'Security Monitoring',
        'Performance Optimization',
        'Backup & Recovery',
        'Bug Fixes & Troubleshooting',
        '24/7 Technical Support'
      ],
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];

technologies = [
  { name: 'Angular', icon: '🅰️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'MS SQL', icon: '🗄️' },
  { name: 'ASP.NET', icon: '🔷' }
];

  process = [
    {
      title: 'Discovery',
      description: 'We understand your requirements, goals, and target audience to create a solid foundation.'
    },
    {
      title: 'Planning',
      description: 'We develop a comprehensive strategy, timeline, and technical architecture for your project.'
    },
    {
      title: 'Development',
      description: 'Our team builds your solution using best practices and cutting-edge technologies.'
    },
    {
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support to ensure continued success.'
    }
  ];
}
