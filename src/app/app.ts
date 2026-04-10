import { Component, inject, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HeaderComponent } from './header/header';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu';
import { RocketLoaderComponent } from './rocket-loader/rocket-loader';
import { SidebarService } from './services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarMenuComponent, RocketLoaderComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  sidebarService = inject(SidebarService);

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
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
