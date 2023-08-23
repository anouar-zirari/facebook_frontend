import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ModalService } from './service/modal.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private modalService: ModalService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('jwtToken')) {
      let token = localStorage.getItem('jwtToken');
      let authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(authRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status === 402) {
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('authResponse');
            this.modalService.openTokenExpiredPage();  
          }
          throw error;
        })
      )
    }
    return next.handle(request);
  }
}
