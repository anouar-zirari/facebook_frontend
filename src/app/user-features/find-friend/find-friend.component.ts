import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FindFriendService } from 'src/app/service/find-friend.service';
import { User } from 'src/app/model/user';
import { FreindProfileService } from 'src/app/service/friend-profile-service';
import { UserService } from 'src/app/service/user.service';
import { Invitation } from 'src/app/model/invitation';
import { InvitationService } from 'src/app/service/invitation.service';
import { Status } from 'src/app/model/status';

@Component({
  selector: 'app-find-friend',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.css']
})
export class FindFriendComponent implements OnInit {

  users: User[] = [];
  invitationsBySender: Invitation[] = [];
  status = Status;
  searchValue: string = '';

  constructor(
    private findFriendService: FindFriendService,
    public friendProfileService: FreindProfileService,
    public userService: UserService,
    private invitationService: InvitationService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getInvitationBySender();
  }


  getAllUsers() {
    return this.findFriendService.getAllUsers().subscribe(
      data => this.users = data
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

  getInvitationBySender() {
    this.invitationService.getInvitationBySender(this.userService.logedUser.id).subscribe(
      data => {
        this.invitationsBySender = data;
      }
    )
  }

  filterFriend(name: Event) {
    this.searchValue = (name.target as HTMLInputElement).value;
  }

}
