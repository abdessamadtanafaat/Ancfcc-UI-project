import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  message: string;

  constructor() {
    // Constructor is executed when the component is created.
    // It's a good place for property initialization.
    this.message = 'Message from constructor';
  }

  ngOnInit() {
    // ngOnInit is executed after the constructor and when the view is initialized.
    // It's often used for tasks that rely on the view.
    this.message = 'Message from ngOnInit';
  }

   
}
