import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { RegistrationResult, UserForRegistrationDto } from '../login/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerResponse: any;
  isSubmitted = false;
  IsSuccessful = false;
  
  


  
  constructor(
    private fb: FormBuilder, 
    private authService: ServiceService, 
    private router: Router) {



      this.registerForm = this.fb.group(
        { 
            username: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(40)]],
            email: ['', [Validators.required, Validators.email]],
            password:['', [Validators.required, Validators.minLength(6),Validators.maxLength(40)]],
            nom:['', [Validators.required]],
            prenom:['', [Validators.required]],
            role:['', [Validators.required, Validators.minLength(6),Validators.maxLength(40)]],
            checkpassword:['', [Validators.required, Validators.minLength(6),Validators.maxLength(40)]],

          });
         
       
    }

    ngOnInit(): void { }

    get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
 
  onSubmitRegister(){ 
     console.log(this.registerForm.value, this.registerForm.invalid); 
     const userForRegistrationDto: UserForRegistrationDto = this.registerForm.value;
     this.authService.register(userForRegistrationDto).subscribe(
      (response: RegistrationResult)=> {
        console.log(response.ErrorRegistration, response.SuccessRegistration);
        if(response){

          alert ('success registration check email'); 
          this.router.navigate(['admin']); 

        } 
        console.log(response); 

      },
     (err:HttpErrorResponse)=>{
       console.log(err.message)
      alert('error registration');
     }





     ); 

     
 

  }




 

}
