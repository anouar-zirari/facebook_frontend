import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../model/user';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/api/v1/auth";
  isLogedin: boolean = false;

  constructor(private http: HttpClient,private userService: UserService) { }

  login(user: User):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, user).pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    )
  }

}
