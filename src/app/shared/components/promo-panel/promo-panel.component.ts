import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promo-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-panel.component.html',
  styleUrl: './promo-panel.component.scss'
})
export class PromoPanelComponent {
  @Input() public heading: string = '';
  @Input() public isFirstheading: boolean = false;
  @Input() public description: string = '';
  @Input() public buttonText: string = '';
}
