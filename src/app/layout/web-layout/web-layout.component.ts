import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HomeComponent } from "../../pages/public-pages/home/home.component";
import { AboutUsComponent } from "../../pages/public-pages/about-us/about-us.component";
import { PricingComponent } from "../../pages/public-pages/pricing/pricing.component";
import { NewOptionsComponent } from "../../pages/public-pages/new-options/new-options.component";
import { CampaignManagersComponent } from "../../pages/public-pages/campaign-managers/campaign-managers.component";
import { SmallBusinesConnectComponent } from "../../pages/public-pages/small-busines-connect/small-busines-connect.component";
import { UseCaseComponent } from "../../pages/public-pages/use-case/use-case.component";

@Component({
  selector: 'app-web-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, PricingComponent, NewOptionsComponent, CampaignManagersComponent, SmallBusinesConnectComponent, UseCaseComponent],
  templateUrl: './web-layout.component.html',
  styleUrl: './web-layout.component.scss'
})
export class WebLayoutComponent {

  constructor(private _router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const sections = [
      { id: 'about-us', route: '/home/about-us' },
      { id: 'services', route: '/home/services' },
      { id: 'use-case', route: '/home/use-case' },
      { id: 'pricing', route: '/home/pricing' },
      { id: 'blog', route: '/home/blog' }
    ];

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          this._router.navigate([section.route]); // Update the route when section is in view
        }
      }
    });
  }
}
