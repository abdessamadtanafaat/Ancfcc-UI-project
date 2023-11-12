import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { __values } from 'tslib';
import { ForgetPaaswordDto } from '../login/user';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  resetForm: FormGroup; 
  isSubmitted = false;

  constructor(private fb:FormBuilder, private router: Router, private authService: ServiceService){ 

    this.resetForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],

    })
  } 

  get f(): {[key: string]: AbstractControl }{
    return this.resetForm.controls; 
  }

  retour(){
    this.router.navigate(['/']);
  }

  resetPassword(){

    this.isSubmitted = true; 
    Object.values(this.resetForm.controls).forEach((control)=> {
      control.markAsTouched(); 
    }); 

    if (!this.resetForm.valid){
      return;
    }

//const email = this.resetForm.value.email;
const userPasswordForgot: ForgetPaaswordDto = this.resetForm.value      
    console.log(userPasswordForgot);
    this.authService.resetPassword(userPasswordForgot).subscribe(
      (response: any)=> {
        console.log(response); 
        alert(response);

      },
      (err: any)=> {
        alert('E-mail not existe.'); 
      }
    );



  }
}
