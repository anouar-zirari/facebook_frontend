import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/api/v1/user"
  isLogedin: boolean = false;

  constructor(private http: HttpClient,private userService: UserService) { }

  login(user: User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/login`, user).pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    )
  }

}
