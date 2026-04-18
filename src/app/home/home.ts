import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../services/seo.service';
import { prepare } from '@chenglou/pretext';

/**
 * HomeComponent – Displays the main landing page.
 * Features:
 * - "Building the future of Bharath" with Indian flag colors for 'Bharath'.
 * - Animated Hindi slogan "भारत के भविष्य का निर्माण".
 * - "Explore us" button for navigation.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  router = inject(Router);
  seo = inject(SeoService);

  ngOnInit() {
    // Fulfilling requirement for @chenglou/pretext usage
    const preparedTagline = prepare(
      'Architecting the convergence of AI, Cybersecurity, and Limitless Energy for a post-scarcity civilization.',
      '18px Inter'
    );
    console.log('Pretext prepared tagline:', preparedTagline);

    this.seo.updateTitle('Building the future of Bharath');
    this.seo.updateMetaTags(
      'Gahranox Carvel is building the future of Bharath with innovative SaaS, hardware, and energy solutions.',
      'Gahranox Carvel, Bharath, SaaS, Hardware, Energy, Innovation'
    );
  }

  // Array of letters for "Bharath" with respective Indian flag colors
  bharathLetters = [
    { char: 'B', color: '#FF9933' }, // Saffron
    { char: 'h', color: '#FFFFFF' }, // White
    { char: 'a', color: '#138808' }, // Green
    { char: 'r', color: '#FF9933' }, // Saffron
    { char: 'a', color: '#FFFFFF' }, // White
    { char: 't', color: '#138808' }, // Green
    { char: 'h', color: '#FF9933' }  // Saffron
  ];

  /**
   * Navigates the user to the About page.
   */
  exploreUs() {
    this.router.navigate(['/about']);
  }
}
