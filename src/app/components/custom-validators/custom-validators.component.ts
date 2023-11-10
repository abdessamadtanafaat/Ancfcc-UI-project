import { Component } from '@angular/core';
import { Validators, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';



export class CustomValidators {
  static username(): ValidationErrors | null {
    return Validators.required;
  }

  static nom(): ValidationErrors | null {
    return Validators.required;
  }

  static prenom(): ValidationErrors | null {
    return Validators.required;
  }

  static role(): ValidationErrors | null {
    return Validators.required;
  }

  static email(): ValidationErrors | null {
    return Validators.compose([
      Validators.required,
      Validators.email,
      CustomValidators.emailDifferentThanPassword
    ]);
  }

  static password(): ValidationErrors | null {
    return Validators.compose([
      Validators.required,
      Validators.minLength(6),
      CustomValidators.passwordStrongEnough
    ]);
  }

  static checkPassword(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const checkPassword = group.get('checkPassword')?.value;

    return password === checkPassword ? null : { passwordsNotMatch: true };
  }

  private static emailDifferentThanPassword(control: AbstractControl): ValidationErrors | null {
    const email = control.value.toLowerCase();
    const password = (control.parent as FormGroup).get('password')?.value.toLowerCase();

    return email !== password ? null : { emailSameAsPassword: true };
  }

  private static passwordStrongEnough(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    // Implement your own password strength check here if needed
    const isStrongEnough = password.length >= 6;

    return isStrongEnough ? null : { passwordNotStrongEnough: true };
  }
}

