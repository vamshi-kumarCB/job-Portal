import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;

  public loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })

  login(){
    if(this.loginForm.valid){
      const enteredemail = this.loginForm.value.email;
      const enteredpassword = this.loginForm.value.password;

      const storedemail= sessionStorage.getItem('email');
      const storedpassword= sessionStorage.getItem('password');

      if(enteredemail===storedemail && enteredpassword===storedpassword){

        alert("Login Successfully");

      }else{
        alert("Invalid Email and Password");
      }

    }
    else{
      this.loginForm.markAllAsTouched();

    }
  }


}
