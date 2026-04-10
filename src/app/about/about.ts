import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderCardComponent } from '../founder-card/founder-card';
import { SeoService } from '../services/seo.service';

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
    this.seo.updateTitle('About Us');
    this.seo.updateMetaTags(
      'Learn about the visionary team at Gahranox Carvel building the future of AI and security systems.',
      'Gahranox Carvel Team, Founders, AI, Security Systems, Startup'
    );
  }

  founders = [
    {
      name: 'ABDUL FAHEEM A',
      title: 'Technology & Business Development | AI & Security Systems | Startup Builder',
      bio: "The future isn't inherited—it's built. We're at the intersection where limitless clean energy meets true AI. We're not just building products; we're laying the bedrock for a post-scarcity civilization. Our mission is to power the world and ignite human progress.",
      linkedin: 'https://www.linkedin.com/in/abdul-faheem-a-04a072200/',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFFXD6koMSW4Q/profile-displayphoto-shrink_200_200/B56ZSdqcsgHsAY-/0/1737811938535?e=1776902400&v=beta&t=BDagnnH-Qy0WOOtE9mZ39NVNRGmtIEOWyoDlXTa9rV0'
    },
    {
      name: 'Kamesh A',
      title: 'Founder | Engineering AI & Energy Convergence',
      bio: 'My engineering philosophy is clear: the future is a system we construct. I architect the convergence of foundational AI and limitless energy. We are engineering the intelligent core for planetary-scale energy and the platforms to transform it. We build what others theorize.',
      linkedin: 'https://www.linkedin.com/in/kamesh-a-5a8717231/',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQF27DkZGjpwrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730004423247?e=1776902400&v=beta&t=Bh0ICkxyzAOsQxgUaH2LZZsim3tRiyPL9h1P-a6xDiA'
    },
    {
      name: 'Vaibhav Ruparel',
      title: 'Security Analyst || Architect of Resilient Systems',
      bio: 'Secure by design. I combine cybersecurity analysis with proactive innovation. I see security not as a barrier, but as the essential foundation that allows technology and people to thrive safely. My goal is to build and protect the systems of tomorrow.',
      linkedin: 'https://www.linkedin.com/in/vaibhav-ruparel-engineer/',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEc0aZJFEq71w/profile-displayphoto-scale_200_200/B4DZzPITfGIAAY-/0/1773001588497?e=1776902400&v=beta&t=Ly7ikzp_7XGRZr9WEtTmrAfnEGqV9a0dFX68vv74jsQ'
    }
  ];
}
