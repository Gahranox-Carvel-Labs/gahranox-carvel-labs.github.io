import { Component, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    styles: [`
        .hero-link {
            text-align: center;
            margin-top: 20px;
        }
        .hero-link a {
            color: #d1d5db;
            text-decoration: none;
            font-size: 14px;
            border-bottom: 1px solid #00dad9;
            padding-bottom: 2px;
            transition: color 0.3s;
        }
        .hero-link a:hover {
            color: #00dad9;
        }
    `]
})
export class HomeComponent {
    constructor(private router: Router) { }

    @HostListener('window:wheel', ['$event'])
    onScroll(event: WheelEvent) {
        // If scrolling down significantly
        if (event.deltaY > 50) {
            this.router.navigate(['/about-us']);
        }
    }
}
