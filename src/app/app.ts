import { Component, signal, OnInit, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ChildrenOutletContexts } from '@angular/router';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [fadeAnimation]
})
export class App implements OnInit {
  protected readonly title = signal('gahranox-website');
  protected readonly isLoading = signal(true);

  // Dropdown Logic
  protected isMenuOpen = false;
  private menuTimer: any;

  constructor(private contexts: ChildrenOutletContexts) { }

  showDropdown() {
    clearTimeout(this.menuTimer);
    this.isMenuOpen = true;
  }

  hideDropdown() {
    this.menuTimer = setTimeout(() => {
      this.isMenuOpen = false;
    }, 300); // 300ms delay to prevent flickering
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // If click is outside the dropdown, close it
    if (!target.closest('.dropdown')) {
      this.isMenuOpen = false;
    }
  }



  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
