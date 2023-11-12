import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import {UserForAuthenticationDto } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  
  loginForm: FormGroup;
  loginResponse: any;
  isSubmitted = false;
  
  constructor( private fb: FormBuilder,  private authService: ServiceService, private router: Router) {

      this.loginForm = this.fb.group(
        {
          username: ['', [Validators.required]],
          // email: ['', [Validators.required, Validators.email]],
          password:['', [Validators.required]]
        });
    }
  
  ngOnInit(): void { }
  
    get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }


  onSubmitLogin() {
    this.isSubmitted = true; 
    console.log(this.isSubmitted);
    Object.values(this.loginForm.controls).forEach((control) => {
       control.markAsTouched();
    }); 

    // if the logi form is not valid don't send the request .  
    if(!this.loginForm.valid){
      return;
    }
    
    console.log(this.loginForm.value, this.loginForm.invalid); 
    const  UserForAuthenticationDto: UserForAuthenticationDto = this.loginForm.value;
    this.authService.login(UserForAuthenticationDto).subscribe(
      (response: string)=>{

          const token = response; 
          localStorage.removeItem('token');

          
          if (token) {

            localStorage.setItem('token', token);
            this.router.navigate(['admin']);
            console.log('Token', token);
            //localStorage.removeItem('token');

          } else {
            alert('Authentication failed. Please check your credentials.');
          }
        },
        (err: Error) => {
          alert('Authentication failed. Please check your credentials.');
        } 

    ); 
    
    }

  login(): void{}
  register(): void{}


}
