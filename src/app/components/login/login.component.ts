import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../models/login.model';

@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  login:LoginModel=new LoginModel();
@ViewChild("password") password:ElementRef<HTMLInputElement> | undefined;
showOrHidePassword(){
  if(this.password===undefined) return;
  if (this.password.nativeElement.type==="password") {
    this.password.nativeElement.type="text";
  } else {
    this.password.nativeElement.type="password";
  }
}
}
