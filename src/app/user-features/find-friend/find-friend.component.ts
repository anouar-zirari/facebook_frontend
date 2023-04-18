import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FindFriendService } from 'src/app/service/find-friend.service';
import { User } from 'src/app/model/user';
import { FreindProfileService } from 'src/app/service/friend-profile-service';

@Component({
  selector: 'app-find-friend',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.css']
})
export class FindFriendComponent implements OnInit {

  users: User[] = [];

  constructor(
    private findFriendService: FindFriendService,
    public friendProfileService: FreindProfileService
    ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    return this.findFriendService.getAllUsers().subscribe(
      data => this.users = data
    )
  }

}
