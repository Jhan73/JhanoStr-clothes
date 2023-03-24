import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { CreateUserDTO } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ){ }
  newUser: CreateUserDTO ={
    name: '',
    email: '',
    password: ''
  };
  token = '';
  createUser(){
    this.userService.create(this.newUser).subscribe(data => {
      console.log(data);
    })
  }
  email = 'jhan@gmail.com';
  password = 'password';
  logIn(){
    this.authService.login(this.email, this.password).subscribe(data => {
      console.log(data)
      this.token = data.access_token;
    })
  }
  getProfile(){
    this.authService.profile(this.token).subscribe(data => {
      console.log(data);
    })
  }

}
