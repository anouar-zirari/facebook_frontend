import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebookApp';
  isLogedIn = localStorage.getItem('jwtToken');

  constructor(public loginService: LoginService){

  }
}
