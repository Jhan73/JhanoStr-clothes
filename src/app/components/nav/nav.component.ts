import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showMenu = false;
  counter = 0;
  token = '';
  profile: User | null = null;
  constructor(
    private storeService : StoreService,
    private authService : AuthService
  ){}
  ngOnInit(): void {
      this.storeService.myCart$.subscribe(products =>{
        this.counter = products.length;
      })
  }
  toggleBtn(){
    this.showMenu = !this.showMenu;
  }
  login(){
    this.authService.login('jhan@gmail.com','password').subscribe(data =>{
      this.token = data.access_token;
      console.log(this.token);
      this.getProfile();
    })
  }
  getProfile(){
    this.authService.profile(this.token).subscribe(user => {
      this.profile = user;
      console.log(user);
    })

  }
}
