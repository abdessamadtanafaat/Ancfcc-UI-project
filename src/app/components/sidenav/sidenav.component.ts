import { Component,Output,EventEmitter,OnInit  } from '@angular/core';
import { navbarData } from './nav-data';
import { animate,style, transition, trigger  } from '@angular/animations';


interface SidenavToggle{
  screenWidth : number; 
  collapsed: boolean; 
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms',
        style({opacity: 1})
      )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('200ms',
        style({opacity: 0})
        )
    ])
    ])

    
  ]

    
  
})
export class SidenavComponent implements OnInit {

  @Output() onTogggleSideNav: EventEmitter<SidenavToggle> = new EventEmitter(); 
  collapsed = true; 
  screenWidth = 768; 
  navData = navbarData; 
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth; 
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onTogggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false; 
    this.onTogggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }

}
