import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-web-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,  FooterComponent],
  templateUrl: './web-layout.component.html',
  styleUrl: './web-layout.component.scss'
})
export class WebLayoutComponent {

}
