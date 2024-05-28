import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './naav-data';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  // Use @HostListener for window resize event
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  ngOnInit() {
    // Defer accessing window.innerWidth until the component is ready
    if (typeof window !== 'undefined') { // Optional check for stricter handling
      this.screenWidth = window.innerWidth;
      // Check for initial collapsed state based on screenWidth
    }
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
