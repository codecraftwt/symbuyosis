import { Component } from '@angular/core';
import { OpportunityCardComponent } from "../../shared/components/opportunity-card/opportunity-card.component";
@Component({
  selector: 'app-enquire-an-opportuntiy',
  standalone: true,
  imports: [OpportunityCardComponent],
  templateUrl: './enquire-an-opportuntiy.component.html',
  styleUrl: './enquire-an-opportuntiy.component.scss'
})
export class EnquireAnOpportuntiyComponent {
  public title = 'Opportunity Results';
  public opportunities = [{
    imageUrl: '../../../assets/images/coffee_creams_handmade.jpg',
    tagline: 'Coffee Creams - Victorian Sweet Jar',
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
  }, {
    imageUrl: '../../../assets/images/handcrafted_chocs.webp',
    tagline: 'Handcrafted Chocolates',
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
  },
  {
    imageUrl: '../../../assets/images/highgrove_organic_clotted_cream_fudge.jpg',
    tagline: 'Highgrove Organic Clotted Cream Fudge',
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
  }
  ]

  protected onBookMarked(event: any) { }

  protected onSubmit(enquiryText: string) { }
}
