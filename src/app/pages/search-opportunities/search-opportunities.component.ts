import { Component } from '@angular/core';
import { SearchComponent } from "../../shared/components/search/search.component";
import { CardGridComponent } from "../../shared/components/card-grid/card-grid.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-opportunities',
  standalone: true,
  imports: [SearchComponent, CardGridComponent, FormsModule],
  templateUrl: './search-opportunities.component.html',
  styleUrl: './search-opportunities.component.scss'
})
export class SearchOpportunitiesComponent {
  categories = ['Inserts', 'Email Inserts', 'Packaging', 'Outside print', 'Stamp']
  selectedOpportunity = '';
  cardsData = [
    { id: 1, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Knitted_Socks.jpg' },
    { id: 2, title: 'Card Placeholder', image: '../../../../assets/images/Shea_Butter_Body_Cream.jpg' },
    { id: 3, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Made_Silk_Cushions.jpg' },
  ]
}
