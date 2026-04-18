import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss'
})
export class SidebarMenuComponent {
  sidebarService = inject(SidebarService);

  closeSidebarOnMobile() {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.sidebarService.close();
    }
  }
}
