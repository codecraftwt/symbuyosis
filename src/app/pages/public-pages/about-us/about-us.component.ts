import { Component } from '@angular/core';
import { PromoPanelComponent } from '../../../shared/components/promo-panel/promo-panel.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [PromoPanelComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  public heading: string = 'Welcome to SymbuyOsis'
  public description: string = 'SymBuyOsis is a new UK-based service owned and managed by experienced real-life business owners from the fashion, craft, and art & culture industries. The service was set up as a means to facilitate peer support for small businesses in the areas of sales and marketing. With a focus on businesses that utilise e-commerce channels, we aim to bring together businesses to share customers and generate new sales leads. We aim to create symbiosis across the small business landscape.'
  public buttonText: string = 'Get Started'
}
