import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

/**
 * ProductsComponent – Displays the company's product offerings.
 * Features:
 * - Filtering by category (All, SaaS, Hardware).
 * - Product cards with images, descriptions, and CTA buttons.
 * - Interactive carousel for hardware products.
 */
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent implements OnInit {
  seo = inject(SeoService);
  selectedCategory: string = 'All';

  ngOnInit() {
    this.seo.updateTitle('Our Products');
    this.seo.updateMetaTags(
      'Explore Gahranox Carvel’s innovative SaaS platforms and hardware security solutions.',
      'SaaS, Hardware Security, Bill0, Hacker Box, Admin Box, Custom Encrypted Pendrive, Custom Branded Bulk Pendrives, 64GB GC Pendrive'
    );
  }

  products = [
    {
      id: 1,
      name: 'Bill0',
      category: 'SaaS',
      description: 'Next-gen billing and invoicing SaaS for modern businesses.',
      images: [
        'https://bill0.gahranoxcarvel.in/Bill0logoCropped.png'
      ],
      link: 'https://bill0.gahranoxcarvel.in',
      buttonText: 'Explore',
      isExternal: true,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: '64GB GC Pendrive',
      category: 'Hardware',
      description: 'High-speed 64GB USB 3.0 pendrive with encrypted storage and space-grade durability.',
      images: [
        'assets/images/products/pendrive/pendrive-1.png',
        'assets/images/products/pendrive/pendrive-2.png',
        'assets/images/products/pendrive/pendrive-3.png'
      ],
      link: '/contact',
      buttonText: 'Buy Now',
      secondaryButtonText: 'Order in Bulk',
      secondaryButtonLink: '/contact',
      isExternal: false,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: 'Hacker Box',
      category: 'Hardware',
      description: 'A specialized 64GB pendrive pre-loaded with all major Linux distributions and custom operating systems for penetration testing and development.',
      images: [
        'assets/images/products/hacker-box/box-1.png',
        'assets/images/products/hacker-box/box-2.png',
        'assets/images/products/hacker-box/box-3.png'
      ],
      link: '/contact',
      buttonText: 'Buy Now',
      secondaryButtonText: 'Order in Bulk',
      secondaryButtonLink: '/contact',
      isExternal: false,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: 'Admin Box',
      category: 'Hardware',
      description: 'The ultimate systems administration toolkit in a high-speed pendrive. Includes automation scripts, custom tools, and a bootable live Linux distro.',
      images: [
        'assets/images/products/admin-box/box-1.png',
        'assets/images/products/admin-box/box-2.png',
        'assets/images/products/admin-box/box-3.png'
      ],
      link: '/contact',
      buttonText: 'Buy Now',
      secondaryButtonText: 'Order in Bulk',
      secondaryButtonLink: '/contact',
      isExternal: false,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: 'Custom Encrypted Pendrive',
      category: 'Hardware',
      description: 'Bespoke encrypted storage solutions tailored to your security needs. Featuring custom password protocols and multi-layer hardware-software encryption.',
      images: [
        'assets/images/products/encrypted-pendrive/drive-1.png',
        'assets/images/products/encrypted-pendrive/drive-2.png',
        'assets/images/products/encrypted-pendrive/drive-3.png'
      ],
      link: '/contact',
      buttonText: 'Buy Now',
      secondaryButtonText: 'Order in Bulk',
      secondaryButtonLink: '/contact',
      isExternal: false,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: 'Custom Branded Bulk Pendrives',
      category: 'Hardware',
      description: 'Premium quality USB drives customized with your company branding. Available in bulk for corporate gifting, events, and organizational needs.',
      images: [
        'assets/images/products/bulk-pendrives/drive-1.png',
        'assets/images/products/bulk-pendrives/drive-2.png'
      ],
      link: '/contact',
      buttonText: 'Buy Now',
      secondaryButtonText: 'Order in Bulk',
      secondaryButtonLink: '/contact',
      isExternal: false,
      currentImageIndex: 0
    }
  ];

  filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  nextImage(product: any, event: Event) {
    event.stopPropagation();
    product.currentImageIndex = (product.currentImageIndex + 1) % product.images.length;
  }

  prevImage(product: any, event: Event) {
    event.stopPropagation();
    product.currentImageIndex = (product.currentImageIndex - 1 + product.images.length) % product.images.length;
  }
}
