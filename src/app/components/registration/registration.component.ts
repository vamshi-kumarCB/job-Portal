import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmpasswordValidator } from 'src/app/confirmpassword-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  hide = true;
  hiden = true;

  public registrationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
      ConfirmpasswordValidator('password'),
    ]),
    consent: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  signup() {
    if (this.registrationForm.valid) {
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;

      sessionStorage.setItem('email', email);
      sessionStorage.setItem('password', password);
      console.log('registration Succesful');
      alert('Registration Successful');

      this.router.navigateByUrl('/login');
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
