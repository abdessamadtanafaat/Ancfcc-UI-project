import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { RegistrationResult, UserForRegistrationDto } from '../login/user';
import { HttpErrorResponse } from '@angular/common/http';
import { matchPasswordValidator,passwordStrongEnough, twoRoles } from './custom-validators';
import { MatDialog } from '@angular/material/dialog';
import { VerificationDialogComponent } from 'src/app/modules/admin/components/verification-dialog/verification-dialog.component';
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
    private router: Router,
    private dialog: MatDialog) {

      this.registerForm = this.fb.group({
      
        password: ['', [Validators.required, Validators.minLength(6)]],
        checkPassword: ['', [Validators.required]],
        role: ['', [Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        username: ['',Validators.required],
        nom: ['',Validators.required],
        prenom: ['',Validators.required],
      }, { validators: [passwordStrongEnough(), matchPasswordValidator(),twoRoles()] });
      
         
       
    }

    

    ngOnInit(): void { }

    get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  openVerificationDialog(): Promise<string> {
    const dialogRef = this.dialog.open(VerificationDialogComponent,
      {
        width: '300px',
      });
      const result = dialogRef.afterClosed().toPromise();
      return result;
  }
 
  onSubmitRegister(){ 
    
    this.isSubmitted = true; 
    Object.values(this.registerForm.controls).forEach(control => {
      control.markAllAsTouched();
    }); 

    // if the request is not valid don't send the request 
    if (!this.registerForm.valid){
      return; 
    }
     console.log(this.registerForm.value, this.registerForm.invalid); 

     const userForRegistrationDto: UserForRegistrationDto = this.registerForm.value;

     
     this.authService.register(userForRegistrationDto).subscribe(
      (response: RegistrationResult)=> {

        console.log(response.ErrorRegistration, response.SuccessRegistration);

        if(response.SuccessRegistration){

          alert ('success registration check email'); 
          this.router.navigate(['admin']); 

        }  else {
          alert(response.ErrorRegistration + 'Erreur inattendue lors de l\'inscription.');

        }

      },
     (err:HttpErrorResponse)=>{
       console.log(err.message)
       // console.error(err); 
      alert('error registration'+' '+ err.error.message);
      if (err.status === 400) {
        // Access the error message from the API in the response body
        alert('Bad Request: ' + err.error.message);
      }
     }
     ); 
  }

}
