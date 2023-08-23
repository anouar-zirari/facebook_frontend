import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { ActivatedRoute } from '@angular/router';
import { FindFriendService } from 'src/app/service/find-friend.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { FreindProfileService } from 'src/app/service/friend-profile-service';
import { UserService } from 'src/app/service/user.service';
import { InvitationService } from 'src/app/service/invitation.service';
import { Invitation } from 'src/app/model/invitation';
import { Status } from 'src/app/model/status';

@Component({
  selector: 'app-friend-profile',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {


  shownElement = '';
  userId!: number;
  user: User = new User();
  friends: User[] = [];
  invitation: Invitation = new Invitation();
  status = Status;

  constructor(
    private activeRoute: ActivatedRoute,
    private friendProfileService: FreindProfileService,
    public userService: UserService,
    private invitationService: InvitationService
  ) { }

  ngOnInit(): void {
    this.shownElement = 'posts';
    this.userId = this.activeRoute.snapshot.params['userId'];

    this.getUserById(this.userId);
    this.getInvitationBySenderAndReceiver(this.userService.logedUser.id, this.userId);

  }

  toggle(elementName: string) {
    this.shownElement = elementName;
  }

  getUserById(id: number) {
    this.friendProfileService.getUserById(id).subscribe(
      data => {
        this.user = data;
        console.log('this is friend list :' + this.user.friends);
      }
    );
  }

  getFriendForUser() {
    return this.userService.getFriendForUser(this.userId).subscribe(
      data => {
        this.friends = data;
      }
    )
  }

  addFriend(receiver: User, sender = this.userService.user) {
    let invitation: Invitation = new Invitation(receiver, sender);

    this.invitationService.friendshipInvitation(invitation).subscribe(
      // change the alert by toast
      () =>
        alert("A friend request has been sent")

    );
  }

  getInvitationBySenderAndReceiver(senderId: number, receiverId: number) {
    if (this.userId) {
      this.invitationService.getInvitationBySenderAndReceiver(senderId, receiverId).subscribe(data => {
        this.invitation = data;
        
        console.log("****************" + "senderId :" + senderId + "receiverId :" + receiverId + "******" + data);

      })
    }
  }


}
