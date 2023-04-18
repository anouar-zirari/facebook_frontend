import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../model/user';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  userResponse!: User;

  constructor(
    private loginService: LoginService, 
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    
  }

  login(){
    this.loginService.login(this.user).subscribe(
      data => {
        this.userResponse = data;
        this.loginService.isLogedin = true;
        this.userService.setUser(this.userResponse);
        this.router.navigateByUrl('facebook/profile')
      }
    )
  }

  

}
