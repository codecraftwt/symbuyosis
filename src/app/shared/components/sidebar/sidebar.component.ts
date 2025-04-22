import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed2: boolean = false; // Default value for isCollapsed2
  @Input() isCollapsed: boolean = false; // Receive isCollapsed from the parent component
  @Output() toggleCollapse = new EventEmitter<void>(); // Emit collapse toggle event

  // user ={
  //   name: 'John Doe',
  //   company: 'Company',
  // }

  // menuItems = [
  //   { name: 'Dashboard', icon: '', route: '/dashboard' },
  //   { name: 'Home', icon: '', route: '/home' },
  //   { name: 'Menu Item 1', icon: '', route: '/menu1' },
  //   { name: 'Menu Item 2', icon: '', route: '/menu2' },
  //   { name: 'Menu Item 3', icon: '', route: '/menu3' },
  //   { name: 'Menu Item 4', icon: '', route: '/menu4' },
  // ];

  user = {
    name: 'John Smith',
    company: 'Company',
  };

  menuItems = [
    { name: 'Dashboard', icon: '', route: '/dashboard' },
    { name: 'Home', icon: '', route: '/home' },
    { name: 'Menu Item 1', icon: '', route: '/menu1' },
    { name: 'Menu Item 2', icon: '', route: '/menu2' },
    { name: 'Menu Item 3', icon: '', route: '/menu3' },
    { name: 'Menu Item 4', icon: '', route: '/menu4' },
  ];

  // isCollapsed = false;

  // toggleCollapse() {
  //   this.isCollapsed = !this.isCollapsed;
  // }
  onToggleCollapse() {
    // debugger
    // this.isCollapsed2 = !this.isCollapsed2; // Toggle the local isCollapsed2 state
    this.toggleCollapse.emit();
  }
  mouseover(){
    if(this.isCollapsed){
      this.isCollapsed2 = false;
    }
  }
  mouseout(){
    if(this.isCollapsed){
      this.isCollapsed2 = true;
    }
  }
}
