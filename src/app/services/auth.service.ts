import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/api/auth`;
  constructor(private http : HttpClient) {
  }
  login(email: string, password: string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
  }
  profile(token: string){
    return this.http.get<User>(`${this.apiUrl}/profile`,{
      headers:{
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
  }

}
