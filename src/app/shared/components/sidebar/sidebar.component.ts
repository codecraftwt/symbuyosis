import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  public isCollapsed2: boolean = false;
  @Input() public isCollapsed: boolean = false;
  @Output() public toggleCollapse = new EventEmitter<void>();

  public user = {
    name: 'John Smith',
    company: 'Company',
  };

  public menuItems = [
    { name: 'Dashboard', icon: '', route: '/layout/dashboard' },
    { name: 'Create Opportunity', icon: '', route: '/layout/create-opportunity' },
    { name: 'My Opportunities', icon: '', route: '/layout/my-opportunities' },
    { name: 'Review Opportunity', icon: '', route: '/layout/review-opportunity' },
    { name: 'Search Opportunity', icon: '', route: '/layout/search-opportunity' },
    { name: 'Search results', icon: '', route: '/layout/search-results' },
    { name: 'Menu Item 4', icon: '', route: '/layout/menu4' },
  ];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.updateCollapseState(window.innerWidth);
    }
  }

  protected onToggleCollapse() {
    this.toggleCollapse.emit();
  }

  protected mouseover() {
    if (this.isCollapsed) {
      this.isCollapsed2 = false;
    }
  }

  protected mouseout() {
    if (this.isCollapsed) {
      this.isCollapsed2 = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  protected onResize(event: UIEvent) {
    const w = (event.target as Window).innerWidth;
    this.updateCollapseState(w);
  }

  private updateCollapseState(width: number) {
    const shouldBeCollapsed = width < 1025;
    this.isCollapsed2 = shouldBeCollapsed;
  }
}
