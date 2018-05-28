import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService) { 
  }

  login() { 
    if(!confirm('Are usure u want to LogIn ?'))return;

    this.auth.login();
  }
}
