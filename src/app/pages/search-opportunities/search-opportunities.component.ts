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

  selectedOpportunity = '';
}
