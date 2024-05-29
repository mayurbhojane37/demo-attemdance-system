import { Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import { navbarData } from './nav-data';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;

}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterModule,HeaderComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{

  @Output() onToggleSideNav:EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});

    }
  }

ngOnInit(){
  if (typeof window !== 'undefined') {
    this.screenWidth = window.innerWidth;
  }
}

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});

  }
}
