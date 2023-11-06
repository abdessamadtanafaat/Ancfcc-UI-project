import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { navbarData } from './nav-data';
import { INavbarData } from './helper';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

interface SidenavToggle{
  screenWidth : number; 
  collapsed: boolean; 
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
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


export class AdminDashboardComponent implements OnInit{

  constructor(private router: Router) {
    //localStorage.removeItem('token');  //pour claire localstorage hit kaydirha manually kykhlik dkhel admin hit local strage ba9i fih token 
    

    console.log(localStorage.getItem('token'));
    

  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']); // Redirect to the login page if no token is found
      console.log(token);
    }
  }
  
  
  // les valeurs initiales
  isSideNavCollapsed = false; 
  screenWidth = 0;

  onToggleSideNav(data: SidenavToggle): void{
    this.screenWidth = data.screenWidth; 
    this.isSideNavCollapsed = data.collapsed; 
  }

}
