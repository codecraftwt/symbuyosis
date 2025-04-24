import { Component } from '@angular/core';

@Component({
  selector: 'app-enquire-an-opportuntiy',
  standalone: true,
  imports: [],
  templateUrl: './enquire-an-opportuntiy.component.html',
  styleUrl: './enquire-an-opportuntiy.component.scss'
})
export class EnquireAnOpportuntiyComponent {
  public opportunities = {
    title: 'Enquire an Opportunity',
    imageUrl: 'https://picsum.photos/300/200?random=1',
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
  };

  protected onEnquire() { }
  protected onBookMarked() { }
}
