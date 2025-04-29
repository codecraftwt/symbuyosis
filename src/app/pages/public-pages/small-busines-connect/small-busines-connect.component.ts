import { Component } from '@angular/core';
import { PromoPanelComponent } from "../../../shared/components/promo-panel/promo-panel.component";

@Component({
  selector: 'app-small-busines-connect',
  standalone: true,
  imports: [PromoPanelComponent],
  templateUrl: './small-busines-connect.component.html',
  styleUrl: './small-busines-connect.component.scss'
})
export class SmallBusinesConnectComponent {

  public heading: string = 'Small Business Connect'
  public description: string = 'Our Peer-to- Peer Connections service that gets small businesses to share their customers. Collaborate on in-kind/reciprocal or a paid basis.'
  public buttonText: string = 'Get Started'
}
