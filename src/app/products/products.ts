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
      'SaaS, Hardware Security, Bill0, Gahranox Secure Drive, 64GB GC Pendrive'
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
      link: '/coming-soon',
      buttonText: 'Buy Now',
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
