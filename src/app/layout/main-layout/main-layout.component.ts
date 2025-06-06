import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  public isCollapsed = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.updateCollapseState(window.innerWidth);
    }
  }

  protected toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:resize', ['$event'])
  protected onResize(event: UIEvent) {
    const w = (event.target as Window).innerWidth;
    this.updateCollapseState(w);
  }

  protected updateCollapseState(width: number) {
    const shouldBeCollapsed = width < 1025;
    this.isCollapsed = shouldBeCollapsed;
  }

  protected isLoggedIn(): boolean {
    return true;
  }
}
