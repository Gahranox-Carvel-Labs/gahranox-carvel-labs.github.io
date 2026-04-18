import { Component, inject, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HeaderComponent } from './header/header';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu';
import { RocketLoaderComponent } from './rocket-loader/rocket-loader';
import { SidebarService } from './services/sidebar.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarMenuComponent, RocketLoaderComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  sidebarService = inject(SidebarService);
  router = inject(Router);

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 0,
      easing: 'ease-out-cubic'
    });

    // Refresh AOS on every navigation completion
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const glow = document.querySelector('.cursor-glow') as HTMLElement;
    if (glow) {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }
  }
}
