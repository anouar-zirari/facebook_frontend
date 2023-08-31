import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from '../status/status.component';
import { PostComponent } from '../post/post.component';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { ModalService } from 'src/app/service/modal.service';

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
  scrollingDistance!: number;
  

  constructor(public userService: UserService, public modalService: ModalService) { }

  ngOnInit(): void {
    this.shownElement = 'posts';
    this.getFriendForUser();
  }

  toggle(elementName: string){
    this.shownElement = elementName;
  }

  getFriendForUser(){
    return this.userService.getFriendForUser(this.userService.user.id).subscribe(
      data => {
        this.friends = data;
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  getScrollingDistance($event: any) {
    this.scrollingDistance = window.scrollY;
    console.log(this.scrollingDistance);
    
  }



}
