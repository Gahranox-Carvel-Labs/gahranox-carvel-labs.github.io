import { Component, inject, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
  animations: [
    trigger('fadeSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class CareersComponent implements OnInit {
  seo = inject(SeoService);
  showToast = false;

  ngOnInit() {
    this.seo.updateTitle('Careers');
    this.seo.updateMetaTags(
      'Join the mission at Gahranox Carvel. Build the future of AI, energy, and security with us.',
      'Careers, Jobs, Gahranox Carvel, AI Engineer, Security Analyst'
    );
  }

  showNotifyToast() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
