import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = ''

  constructor(private http: HttpClient) { }


  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

}
