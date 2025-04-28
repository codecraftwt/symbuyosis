import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss'
})
export class ParagraphComponent {
  @Input() public heading: string = 'Welcome to SymbuyOsis';
  @Input() public description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
}
