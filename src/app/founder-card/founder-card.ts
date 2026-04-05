import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-founder-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './founder-card.html',
  styleUrl: './founder-card.scss'
})
export class FounderCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) bio!: string;
  @Input({ required: true }) linkedinUrl!: string;
  @Input({ required: true }) imageUrl!: string;
}
