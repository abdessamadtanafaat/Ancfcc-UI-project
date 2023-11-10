import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrongEnough(): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
    // const password: string  = control.value;   // this methode no working ... !
    const password = control.get('password');
    if (!password?.value){
        return null; 
    }
    const hasUpperCase = /[A-Z]/.test(password?.value);
    const hasLowerCase = /[a-z]/.test(password?.value);
    const hasNumbers = /\d/.test(password?.value);
    // const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password?.value);
    const isLengthValid = password?.value.length >= 6; 

    const isValid = isLengthValid && hasUpperCase && hasLowerCase && hasNumbers ; 

    return isValid ? null : { strongPassword : true }; 

   }; 
    
}
export function twoRoles(): ValidatorFn {
   return (control: AbstractControl) : ValidationErrors | null => {
      const role = control.get('role'); 
      //const role  = control.value;
      const admin = 'Admin'; 
      const agent = 'Agent'; 

      if (!role?.value){
        return null; 
      }

          const isValidRole = role.value === admin || role.value === agent; 
       
          return isValidRole ? null : { roleNotSet: true }; 
   }; 

}

export function matchPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('checkPassword');

    if (!password?.value || !confirmPassword?.value) {
      return null; // If controls are not available, return null (no validation error)
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  };
}

