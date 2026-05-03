import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderCardComponent } from '../founder-card/founder-card';
import { SeoService } from '../services/seo.service';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FounderCardComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit {
  seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateTitle('About the Founder');
    this.seo.updateMetaTags(
      'Learn about the visionary founder at Gahranox Carvel building the future of AI and security systems.',
      'Gahranox Carvel Founder, AI, Security Systems, Startup'
    );
    
    // Safety refresh for animations to ensure they trigger on large screens
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }

  founders = [
    {
      name: 'ABDUL FAHEEM A',
      title: 'Founder & CEO | AI & Security Systems | Startup Builder',
      bio: "The future isn't inherited—it's built. We're at the intersection where limitless clean energy meets true AI. We're not just building products; we're laying the bedrock for a post-scarcity civilization. Our mission is to power the world and ignite human progress.",
      linkedin: 'https://www.linkedin.com/in/abdul-faheem-a-04a072200/',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFFXD6koMSW4Q/profile-displayphoto-shrink_200_200/B56ZSdqcsgHsAY-/0/1737811938535?e=1776902400&v=beta&t=BDagnnH-Qy0WOOtE9mZ39NVNRGmtIEOWyoDlXTa9rV0'
    }
  ];
}
