import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080/api/v1/user';
  logedUser: User = new User();


  constructor(private http: HttpClient) { }


  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getFriendForUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/friends/${id}`);
  }

  setUser(user: AuthResponse) {
    let user1 = new User();
    let users = JSON.parse(localStorage.getItem('authResponse')!);
    console.log("--", users);
    
    user1.id = user.id;
    user1.firstName = user.firstname;
    user1.lastName = user.lastname;
    this.logedUser = user1;
  }

  get user() {
    let user = JSON.parse(localStorage.getItem('authResponse')!);
    this.logedUser.id = user.id;
    this.logedUser.firstName = user.firstname;
    this.logedUser.lastName = user.lastname;
    return this.logedUser;
  }





}
