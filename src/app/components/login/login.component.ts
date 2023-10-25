import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Users } from 'src/app/shared/module/Users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  
  title : string = 'Login From'; 
  
  
  loginForm: FormGroup = new FormGroup({
    username : new FormControl(''),
    email: new FormControl(''), 
    password: new FormControl(''),
  }); 
  isSubmitted = false; 


  
  constructor(private fb: FormBuilder, private authService: ServiceService, private router: Router) {}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        username: [
          '', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password:[
          '',
          [
            Validators.required, 
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]

      })
    
  }
    get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }


  onSubmitLogin() {
    console.log(this.loginForm.value, this.loginForm.invalid); 

    this.authService.login(this.loginForm.value).subscribe(
      (response: string)=>{

          const token = response; 

          if (token) {
            localStorage.setItem('token', token);
            this.router.navigate(['admin']);
            console.log('Token', token);
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
