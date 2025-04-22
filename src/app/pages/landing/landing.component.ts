import { Component } from '@angular/core';
import { PromoPanelComponent } from '../../shared/components/promo-panel/promo-panel.component';
import { ParagraphComponent } from '../../shared/components/paragraph/paragraph.component';
import { CardGridComponent } from '../../shared/components/card-grid/card-grid.component';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardGridComponent,ParagraphComponent,PromoPanelComponent,SearchComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
