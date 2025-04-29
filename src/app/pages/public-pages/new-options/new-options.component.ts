import { Component } from '@angular/core';
import { PromoPanelComponent } from "../../../shared/components/promo-panel/promo-panel.component";

@Component({
  selector: 'app-new-options',
  standalone: true,
  imports: [PromoPanelComponent],
  templateUrl: './new-options.component.html',
  styleUrl: './new-options.component.scss'
})
export class NewOptionsComponent {

  public heading: string = 'New Options'
  public description: string = 'Finding Google Ads and Social Media Advertising complicated? Need something that’s a lot more straightforward but effective?'
  public buttonText: string = 'Get Started'
}
