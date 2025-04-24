import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-enquire-an-opportuntiy',
  standalone: true,
  imports: [FormsModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './enquire-an-opportuntiy.component.html',
  styleUrl: './enquire-an-opportuntiy.component.scss'
})
export class EnquireAnOpportuntiyComponent {
  private modalService = inject(NgbModal);
  public enquiryText = "";

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

  protected onEnquire(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  protected onBookMarked() { }

  protected onSubmit() { }
}
