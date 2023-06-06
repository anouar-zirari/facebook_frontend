import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from '../status/status.component';
import { PostComponent } from '../post/post.component';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, StatusComponent, PostComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  shownElement = '';
  friends: User[] = [];
  

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.shownElement = 'posts';
  }

  toggle(elementName: string){
    this.shownElement = elementName;
  }

  getFriendForUser(){
    return this.userService.getFriendForUser(this.userService.user.id).subscribe(
      data => {
        this.friends = data;
      }
    )
  }



}
