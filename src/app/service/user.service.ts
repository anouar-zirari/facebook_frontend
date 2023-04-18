import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080/api/v1/user';
  userFromLogin!: User;

  constructor(private http: HttpClient) { }


  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getFriendForUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/friends/${id}`);
  }

  setUser(user: User){
   this.userFromLogin = user;
  }

  get user() {
    return this.userFromLogin;
  }

  


}
