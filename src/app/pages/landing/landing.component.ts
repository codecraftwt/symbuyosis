import { Component } from '@angular/core';
import { PromoPanelComponent } from '../../shared/components/promo-panel/promo-panel.component';
import { ParagraphComponent } from '../../shared/components/paragraph/paragraph.component';
import { CardGridComponent } from '../../shared/components/card-grid/card-grid.component';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardGridComponent, ParagraphComponent, PromoPanelComponent, SearchComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  public cardsData = [
    { id: 1, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Knitted_Socks.jpg' },
    { id: 2, title: 'Card Placeholder', image: '../../../../assets/images/Shea_Butter_Body_Cream.jpg' },
    { id: 3, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Knitted_Socks.jpg' },
    { id: 4, title: 'Card Placeholder', image: '../../../../assets/images/Artwork.jpg' },
    { id: 5, title: 'Card Placeholder', image: '../../../../assets/images/Custom_Baby_Sweater.jpg' },
    { id: 6, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Knitted_Socks.jpg' },
    { id: 7, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Made_Silk_Cushions.jpg' },
    { id: 8, title: 'Card Placeholder', image: '../../../../assets/images/Ethnic_Cushion.jpg' },
  ]
}
