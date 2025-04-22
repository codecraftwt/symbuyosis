import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss'
})
export class ParagraphComponent {
  @Input() heading: string = 'Welcome to SymbuyOsis';
  @Input() description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
}
