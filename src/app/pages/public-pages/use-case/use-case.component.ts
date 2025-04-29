import { Component } from '@angular/core';
import { PromoPanelComponent } from "../../../shared/components/promo-panel/promo-panel.component";

@Component({
  selector: 'app-use-case',
  standalone: true,
  imports: [PromoPanelComponent],
  templateUrl: './use-case.component.html',
  styleUrl: './use-case.component.scss'
})
export class UseCaseComponent {

  public heading: string = 'Use Case'
  public description: string = 'Etsy Traders: Are you a niche trader on Etsy? Are you looking to find connections with customers of other brands and services that complement yours?'
  public buttonText: string = 'Get Started'
}
