import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../model/registrationRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  register(registrationRequest: RegistrationRequest): Observable<RegistrationRequest> {
    return this.http.post<RegistrationRequest>(`${this.apiUrl}/auth/register`, registrationRequest)
  }


}
