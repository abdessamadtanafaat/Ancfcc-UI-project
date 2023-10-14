import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helpter';

@Component({
  selector: 'app-sublevel-menu',
  template: `
  <ul *ngIf="collapsed && data.items && data.items.length>0 "
  class= "app-sublevel-menu"
  >


        <li *ngFor="let item of data.items" class="sublevel-nav-item">
            <a class= "sublevel-nav-link" 
    *ngIf="item.items && item.items.length > 0"
    >
          <i class="sublevel-link-icon fa-fa-circle"></i>
          <span class = "sublevel-link-text" *ngIf="collapsed"> {{item.label}}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
          
          [ngClass]="item.expanded? 'fa fa-angle-right' : 'fa fa-angle-down'"
          ></i>
          </a>
          <a class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length == 0)"
          [routerLink]="[item.routerLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact: true}" 
          >
           <i class="sublevel-link-icon fa-fa-circle"></i>
           <span class = "sublevel-link-text" *ngIf="collapsed"> {{item.label}}</span>


        </a>
        </li> 

  </ul>
  `,
    styleUrls: ['./sidenav.component.scss'],

})
export class SublevelMenuComponent  implements OnInit{
  
  @Input() data: INavbarData = {
     routerLink: '', 
     icon: '',
     label: '',
     items: []
  }
  @Input() collapsed = false; 
  @Input() animating: boolean | undefined; 
  @Input() selected: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() {}
  ngOnInit(): void {
    
  }



}
