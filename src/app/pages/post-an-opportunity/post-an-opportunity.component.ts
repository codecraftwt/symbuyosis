import { Component, OnInit } from '@angular/core';
import { OpportunityCardComponent } from "../../shared/components/opportunity-card/opportunity-card.component";

@Component({
  selector: 'app-post-an-opportunity',
  standalone: true,
  imports: [OpportunityCardComponent],
  templateUrl: './post-an-opportunity.component.html',
  styleUrl: './post-an-opportunity.component.scss'
})
export class PostAnOpportunityComponent implements OnInit {

  public title = 'Post an Opportunity';

  public opportunities = [{
    imageUrl: '../../../assets/images/post-an-opportunity.jpg',
    tagline: 'Hand Knitted Socks',
    description: 'Full length hand-knitted socks made from certified Shetland wool.',
    opportunity: 'We are one of the few makers of Shetland wool socks that are certified.',
    format_type: 'Physical Package / Inserts',
    target_customer: 'Consumer / Men, Women',
    target_region: 'Consumer / Men, Women',
    product_type_subtype: 'Clothing / Accessories - Unisex',
    averagePrice: 100,
    volumeMonthly: 100,
    datePosted: '25-04-2025',
    link: 'https://www.thedorothydays.com/products/natural-shetland-hand-knitted-bed-socks-british-wool'
  },]

  constructor() { }

  ngOnInit(): void {

  }

  protected onEdit(event: any) { }
  protected onSaveDraft(event: any) { }
  protected onPost(event: any) { }
}
