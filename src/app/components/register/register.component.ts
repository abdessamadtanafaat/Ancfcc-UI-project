import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

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

    ngOnInit(): void { }

    get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
 
  onSubmitRegister(){


  }




 

}
