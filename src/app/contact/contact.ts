import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements OnInit {
  seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateTitle('Contact Us');
    this.seo.updateMetaTags(
      'Get in touch with Gahranox Carvel. Let’s discuss how we can build the future together.',
      'Contact, Gahranox Carvel, Support, Business Development'
    );
  }
}
