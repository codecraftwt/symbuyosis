import { Component } from '@angular/core';
import { PromoPanelComponent } from '../../../shared/components/promo-panel/promo-panel.component';
import { ReversePromoPanelComponent } from "../../../shared/components/reverse-promo-panel/reverse-promo-panel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PromoPanelComponent, ReversePromoPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public heading: string = 'Welcome to SymbuyOsis'
  public description: string = 'SymBuyOsis is an innovative marketing platform for small ecommerce businesses to support collaboration in sales and marketing to increase exposure and gain new customers.SymBuyOsis is the gateway to potentially thousands of on-line sellers across the world and their customers. SymBuyOsis enables larger businesses to find smaller businesses to collaborate with, and explore new opportunities for advertising. Small businesses can explore a new potential revenue stream by realising the value of their current customers and relationships. SymBuyOsis offers a number of flexible ways to operate. Just choose the services that are best suited for your business needs.'
  public buttonText: string = 'Get Started'

  public heading2: string = 'Open Channel'
  public description2: string = 'Does your small business have what big brands are looking for? Are you ready to introduce your customers to world-class products and services? Are you a large brand looking to connect with authentic small businesses and their customers? SymBuyOsis offers opportunities to collaborate through physical and virtual marketing methods. Not sure about the possibilities? We provide you with practical tools, tips, and advice on how to collaborate'

  public reverseHeading: string = 'Small Business Connect'
  public reverseDescription: string = 'Our Peer-to- Peer Connections service that gets small businesses to share their customers. Collaborate on in-kind/reciprocal or a paid basis.'

}
