import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  @Input() cards: any[] = [
    { id: 1, title: 'Card Placeholder' },
    { id: 2, title: 'Card Placeholder' },
    { id: 3, title: 'Card Placeholder' },
    { id: 4, title: 'Card Placeholder' },
    { id: 5, title: 'Card Placeholder' },
    { id: 6, title: 'Card Placeholder' }
  ];
}
