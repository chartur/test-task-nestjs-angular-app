import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ClassValidator {
  public static checkPasswords (group: AbstractControl):  ValidationErrors | null {
    let pass = group?.get('password')?.value;
    let confirmPass = group?.get('confirm_password')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
}
