import { Component } from '@angular/core';
import { PromoPanelComponent } from "../../../shared/components/promo-panel/promo-panel.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PromoPanelComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  public heading: string = 'Pricing'
  public description: string = 'Our monthly tariffs are customised to the type of your business. Starting off at FREE for our smaller business, up to £100 per month for our larger national and international businesses. At whatever level, we aim to deliver value for money.'
  public buttonText: string = 'Get Started'
}
