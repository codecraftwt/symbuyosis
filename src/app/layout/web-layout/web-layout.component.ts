import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HomeComponent } from "../../pages/public-pages/home/home.component";
import { AboutUsComponent } from "../../pages/public-pages/about-us/about-us.component";
import { PricingComponent } from "../../pages/public-pages/pricing/pricing.component";

@Component({
  selector: 'app-web-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, PricingComponent],
  templateUrl: './web-layout.component.html',
  styleUrl: './web-layout.component.scss'
})
export class WebLayoutComponent {

}
