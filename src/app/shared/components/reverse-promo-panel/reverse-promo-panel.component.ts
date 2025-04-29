import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reverse-promo-panel',
  standalone: true,
  imports: [],
  templateUrl: './reverse-promo-panel.component.html',
  styleUrl: './reverse-promo-panel.component.scss'
})
export class ReversePromoPanelComponent {
  @Input() public heading: string = '';
  @Input() public description: string = '';
  @Input() public buttonText: string = '';
}
