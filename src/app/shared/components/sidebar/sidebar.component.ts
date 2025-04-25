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

  isCollapsed2: boolean = false;
  @Input() isCollapsed: boolean = false;
  @Output() toggleCollapse = new EventEmitter<void>();

  user = {
    name: 'John Smith',
    company: 'Company',
  };

  menuItems = [
    { name: 'Dashboard', icon: '', route: '/dashboard' },
    { name: 'Opportunity', icon: '', route: '/opportunity' },
    { name: 'Opportunities', icon: '', route: '/opportunities' },
    { name: 'Post Opportunity', icon: '', route: '/post-an-opportunity' },
    { name: 'Search Opportunities', icon: '', route: '/search-opportunities' },
    { name: 'Menu Item 3', icon: '', route: '/enquire-an-opportunity' },
    { name: 'Menu Item 4', icon: '', route: '/menu4' },
  ];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.updateCollapseState(window.innerWidth);
    }
  }

  onToggleCollapse() {
    this.toggleCollapse.emit();
  }

  mouseover() {
    if (this.isCollapsed) {
      this.isCollapsed2 = false;
    }
  }

  mouseout() {
    if (this.isCollapsed) {
      this.isCollapsed2 = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const w = (event.target as Window).innerWidth;
    this.updateCollapseState(w);
  }

  private updateCollapseState(width: number) {
    const shouldBeCollapsed = width < 1025;
    this.isCollapsed2 = shouldBeCollapsed;
  }
}
