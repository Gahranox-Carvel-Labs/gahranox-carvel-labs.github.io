import { Injectable, signal, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _isOpen = signal(true);

  isOpen = this._isOpen.asReadonly();

  constructor() {
    this.checkScreenSize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  private checkScreenSize() {
    if (typeof window !== 'undefined') {
      // For mobile hide, for large screens show by default
      if (window.innerWidth < 992) {
        this._isOpen.set(false);
      } else {
        this._isOpen.set(true);
      }
    }
  }

  toggle() {
    this._isOpen.update(open => !open);
  }

  close() {
    this._isOpen.set(false);
  }
}
