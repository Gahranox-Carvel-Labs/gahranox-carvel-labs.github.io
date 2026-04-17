import { Component, inject } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  sidebarService = inject(SidebarService);

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
