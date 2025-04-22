import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promo-panel',
  standalone: true,
  imports: [],
  templateUrl: './promo-panel.component.html',
  styleUrl: './promo-panel.component.scss'
})
export class PromoPanelComponent {
  @Input() heading: string = 'Welcome to SymbuyOsis';
  @Input() description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
  @Input() buttonText: string = 'Button';
}
