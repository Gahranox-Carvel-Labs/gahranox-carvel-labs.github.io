import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
    expandedAuthor: string | null = null;

    constructor(private router: Router) { }

    toggleAuthor(authorName: string) {
        if (this.expandedAuthor === authorName) {
            this.expandedAuthor = null;
        } else {
            this.expandedAuthor = authorName;
        }
    }

    @HostListener('window:wheel', ['$event'])
    onScroll(event: WheelEvent) {
        // If scrolling up significantly and at the top of the page
        if (event.deltaY < -50 && window.scrollY === 0) {
            this.router.navigate(['/']);
        }
    }
}
