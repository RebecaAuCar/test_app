import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public loginForm: FormGroup;
  public emailInvalid: boolean = false;
  public passInvalid: boolean = false;
   
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(5)]],
        reminder: [false]
      }
    );
  }

  public clear(emailOrPass){
    switch (emailOrPass){
      case 'email': this.emailInvalid = false;
      break;
      case 'pass': this.passInvalid = false;
      break;
    }
  }

  public login(){
      this.loginForm.get('email').invalid ? this.emailInvalid = true : this.emailInvalid = false;
      this.loginForm.get('pass').invalid ? this.passInvalid = true : this.passInvalid = false;
    if (!this.emailInvalid && !this.passInvalid){
      console.log("Formulario enviado correctamente con los siguientes valores: ");
      console.log("Email: " + this.loginForm.get('email').value);
      console.log("Contraseña: " +this.loginForm.get('pass').value);
      console.log("Recordar: " + this.loginForm.get('reminder').value);
    }
  } 
}
