import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  public categories = ['Electronics', 'Clothing', 'Books', 'Confectionary'];
  public regions = ['United Kingdom', 'United States', 'France', 'Germany'];
  public subcategories: { [key: string]: string[] } = {
    Electronics: ['Phones', 'Laptops', 'Accessories'],
    Clothing: ['Shirts', 'Jeans', 'Jackets'],
    Books: ['Fiction', 'Non-Fiction', 'Comics'],
    Confectionary: ['Sweets']
  };

  public selectedCategory: string = '';
  public selectedSubcategory: string = '';
  public selectedRegion: string = '';

  constructor(private _router: Router) { }

  protected onSearch(): void {
    this._router.navigate(['/layout/search-results'])
  }

}
