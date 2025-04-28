import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promo-panel',
  standalone: true,
  imports: [],
  templateUrl: './promo-panel.component.html',
  styleUrl: './promo-panel.component.scss'
})
export class PromoPanelComponent {
  @Input() public heading: string = 'Welcome to SymbuyOsis';
  @Input() public description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
  @Input() public buttonText: string = 'Button';
}
