import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ConfirmpasswordValidator (passwordControlName: string)  {

      return (control: AbstractControl): ValidationErrors | null => {
        const parent = control.parent;
        if (!parent) return null;
    
        const password = parent.get(passwordControlName)?.value;
        const confirmPassword = control.value;
    
        if (!password || !confirmPassword) return null;
    
        return password === confirmPassword ? null : { passwordsNotMatching: true };
      };
    }
    
