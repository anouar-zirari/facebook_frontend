import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationServcice } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';
import { Notification } from 'src/app/model/notification';



@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(
    private notificationServcie: NotificationServcice, 
    public userServcie: UserService) { }

  ngOnInit(): void {
    this.notificationServcie.getAllFriendshipNotificationForUser(
        this.userServcie.logedUser.id
      ).subscribe( 
        data => this.notifications = data
      )
  }


}
