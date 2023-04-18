import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './user-features/profile/profile.component';
import { FindFriendComponent } from './user-features/find-friend/find-friend.component';
import { FriendProfileComponent } from './user-features/friend-profile/friend-profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'facebook/profile',
    component: ProfileComponent
  },
  {
    path: 'facebook/find-friend',
    component: FindFriendComponent
  },
  {
    path: 'facebook/friend-profile/:userId',
    component: FriendProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
