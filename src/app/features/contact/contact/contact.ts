import { Component, afterNextRender, Injector, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private map: any;
  private marker: any;
  private platformId = inject(PLATFORM_ID);

  contactInfo = [
    {
      title: 'Email',
      value: 'contact@makkalei.com',
      link: 'mailto:contact@makkalei.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Phone',
      value: '+91 9442282911',
      link: 'tel:+919442282911',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      title: 'Address',
      value: 'Sasthan kovil Street, Nagercoil City, Pin code: 629004',
      link: null,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];

  socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919442282911',
      icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
    },
    {
      name: 'Email',
      url: 'mailto:contact@makkalei.com',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
    }
  ];

  constructor(private injector: Injector) {
    // Only run on browser side (Angular 17+ recommended approach)
    afterNextRender(() => {
      this.initMap();
    }, { injector: this.injector });
  }

private async initMap(): Promise<void> {
  // Double-check we're in browser
  if (!isPlatformBrowser(this.platformId)) {
    return;
  }

  // Dynamically import Leaflet only on browser
  const L = await import('leaflet');

  // Initialize map centered on Nagercoil
  this.map = L.map('map', {
    center: [8.1784, 77.4345],
    zoom: 15,
    zoomControl: true,
    scrollWheelZoom: true,
    attributionControl: false
  });

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
  }).addTo(this.map);

  // Create custom Heroicon marker using divIcon
  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="relative">
        <div class="absolute -top-12 -left-6 animate-bounce">
          <svg class="w-12 h-12 text-blue-600 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
  });

  // Add marker with custom icon
  this.marker = L.marker([8.1784, 77.4345], { icon: customIcon }).addTo(this.map);
  
  // Add popup to marker with your logo
  this.marker.bindPopup(`
    <div class="p-2">
      <div class="flex items-center mb-2">
        <img
          src="assets/logo.png"
          alt="Makkalei Logo"
          class="w-10 h-10 object-contain"
        />
        <strong class="text-xl font-bold text-gray-900">makkalei</strong>
      </div>
      <p class="text-sm text-gray-600 mb-1">Sasthan kovil Street</p>
      <p class="text-sm text-gray-600 mb-3">Nagercoil City, 629004</p>
      <a href="https://maps.app.goo.gl/cN2RabFXRZfAZhGB7" 
         target="_blank"
         class="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 font-medium">
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        Get Directions
      </a>
    </div>
  `).openPopup();
}

  openInGoogleMaps(): void {
    if (isPlatformBrowser(this.platformId)) {
      const url = 'https://maps.app.goo.gl/cN2RabFXRZfAZhGB7';
      window.open(url, '_blank');
    }
  }
}