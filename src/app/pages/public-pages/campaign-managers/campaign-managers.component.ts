import { Component } from '@angular/core';
import { PromoPanelComponent } from "../../../shared/components/promo-panel/promo-panel.component";

@Component({
  selector: 'app-campaign-managers',
  standalone: true,
  imports: [PromoPanelComponent],
  templateUrl: './campaign-managers.component.html',
  styleUrl: './campaign-managers.component.scss'
})
export class CampaignManagersComponent {

  public heading: string = 'Campaign Managers'
  public description: string = 'Are you a big brand looking to engage local or targeted niche customer groups? Need to connect with small business customers of related services and products?'
  public buttonText: string = 'Get Started'
}
