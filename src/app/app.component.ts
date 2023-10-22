import { Component } from '@angular/core';


interface SidenavToggle {

  screenWidth: number; 
  collapsed: boolean; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Ancfcc-Front-end-project';
  
  // les valeurs initiales
  isSideNavCollapsed = false; 
  screenWidth = 0;

  onToggleSideNav(data: SidenavToggle): void{
    this.screenWidth = data.screenWidth; 
    this.isSideNavCollapsed = data.collapsed; 
  }
}
