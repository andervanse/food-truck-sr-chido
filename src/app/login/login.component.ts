import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginCredentials } from '../models/login-credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  @ViewChild('frmLogin', { static: false }) frmLogin : FormControl;

  ngOnInit() {
  }

  onSubmitForm() {
    console.log(this.frmLogin);

    let credentials : LoginCredentials = {
      login: this.frmLogin.value.usuario,
      senha: this.frmLogin.value.senha
    };

    this.authService.autenticar(credentials).subscribe((resp) => {
      console.log(resp);
    }, (error) => {
      console.error(error);      
    });
  }

}
