import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-rocket-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rocket-loader.html',
  styleUrl: './rocket-loader.scss'
})
export class RocketLoaderComponent implements OnInit {
  isLoading = true;
  showLoader = true;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('load', () => this.hideLoader());
      // Fallback: hide after max 3 seconds
      setTimeout(() => this.hideLoader(), 3000);
    }
  }

  hideLoader() {
    this.isLoading = false;
    setTimeout(() => {
      this.showLoader = false;
    }, 500);
  }
}
