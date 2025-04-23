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

  postedOpportunities = 8;
  engagedOpportunities = 4;
  selectedPostedOpportunity = '';
  selectedEnagagedOpportunity = '';
  categories = []

}
