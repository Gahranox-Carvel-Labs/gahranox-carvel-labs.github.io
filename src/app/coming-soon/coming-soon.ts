import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="coming-soon-container d-flex flex-column align-items-center justify-content-center animate-fade-in">
      <div class="glass-panel p-5 text-center border-orange">
        <i class="bi bi-rocket-takeoff-fill display-1 mb-4 orange-glow"></i>
        <h1 class="display-3 mb-3 white">Something Big is Coming</h1>
        <p class="lead mb-5 text-muted">We're currently working on this feature to bring you the best experience. Stay tuned!</p>
        <a routerLink="/" class="btn btn-explore btn-lg">Back to Home</a>
      </div>
    </div>
  `,
  styles: [`
    .coming-soon-container {
      min-height: 80vh;
    }
    .orange-glow {
      color: var(--primary-orange);
      filter: drop-shadow(0 0 15px rgba(255, 107, 53, 0.6));
      animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
  `]
})
export class ComingSoonComponent {}
