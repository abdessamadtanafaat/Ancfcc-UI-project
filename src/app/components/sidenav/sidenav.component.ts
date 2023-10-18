import { Component,Output,EventEmitter,OnInit  } from '@angular/core';
import { navbarData } from './nav-data';
import { animate,style, transition, trigger  } from '@angular/animations';
import { INavbarData } from './helper';
import { isNgTemplate } from '@angular/compiler';


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
  collapsed = false; 
  screenWidth = 0; 
  navData = navbarData;
  multiple: boolean = false;  
  
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
  handleClick(item: INavbarData): void{
    if (!this.multiple){
      for(let modelItem of this.navData){
        if (item !== modelItem && modelItem.expanded){
          modelItem.expanded = false; 
        }
      }
    }
    item.expanded = !item.expanded
  }
}