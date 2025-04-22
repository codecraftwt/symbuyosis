import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent  {
 // Dummy Data for Categories and Subcategories
 categories = ['Electronics', 'Clothing', 'Books'];
 subcategories: { [key: string]: string[] } = {
   Electronics: ['Phones', 'Laptops', 'Accessories'],
   Clothing: ['Shirts', 'Jeans', 'Jackets'],
   Books: ['Fiction', 'Non-Fiction', 'Comics']
 };

 selectedCategory: 'Electronics' | 'Clothing' | 'Books' = 'Electronics';
 selectedSubcategory: string = '';

 onSearch(): void {
   console.log('Search initiated for Category:', this.selectedCategory, 'and Subcategory:', this.selectedSubcategory);
 }
}
