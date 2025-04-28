import { Component } from '@angular/core';
import { CardGridComponent } from "../../shared/components/card-grid/card-grid.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [CardGridComponent, FormsModule],
  templateUrl: './opportunities.component.html',
  styleUrl: './opportunities.component.scss'
})
export class OpportunitiesComponent {

  public postedOpportunities = 8;
  public engagedOpportunities = 4;
  public selectedPostedOpportunity = '';
  public selectedfilterValue = '';
  public selectedEnagagedOpportunity = '';
  public categories = ['Inserts', 'Email Inserts', 'Packaging', 'Outside print', 'Stamp'];
  public filter = ['All' ,'Active','Inactive','Date' ];
  public cardsData = [
    { id: 1, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Knitted_Socks.jpg' },
    { id: 2, title: 'Card Placeholder', image: '../../../../assets/images/Shea_Butter_Body_Cream.jpg' },
    { id: 3, title: 'Card Placeholder', image: '../../../../assets/images/Hand_Made_Silk_Cushions.jpg' },
  ]
  public engagedcardsData = [
    { id: 1, title: 'Card Placeholder', image: '../../../../assets/images/Custom_Baby_Sweater.jpg' },
    { id: 2, title: 'Card Placeholder', image: '../../../../assets/images/Artwork.jpg' },
    { id: 3, title: 'Card Placeholder', image: '../../../../assets/images/Ethnic_Cushion.jpg' },
  ]
}
