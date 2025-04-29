import { Component, OnInit } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public title = 'symbuyosys-frontend';
  public ishome = true;
  public routes = ['create-account', 'login'];

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  public checkRoute(){
    const currentUrl = this._router.url.split('?')[0];
    this.ishome = !this.routes.some(route => currentUrl.includes(route));
  }
}
