import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class AppComponent {
  sidebarService = inject(SidebarService);
}
