import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed2: boolean = false;
  @Input() isCollapsed: boolean = false;
  @Output() toggleCollapse = new EventEmitter<void>();

  user = {
    name: 'John Smith',
    company: 'Company',
  };

  menuItems = [
    { name: 'Dashboard', icon: '', route: '/dashboard' },
    { name: 'Opportunities', icon: '', route: '/opportunities' },
    { name: 'Menu Item 1', icon: '', route: '/menu1' },
    { name: 'Menu Item 2', icon: '', route: '/menu2' },
    { name: 'Menu Item 3', icon: '', route: '/menu3' },
    { name: 'Menu Item 4', icon: '', route: '/menu4' },
  ];

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
}
