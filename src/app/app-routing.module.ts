import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './user-features/profile/profile.component';
import { FindFriendComponent } from './user-features/find-friend/find-friend.component';
import { FriendProfileComponent } from './user-features/friend-profile/friend-profile.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './user-features/notification/notification.component';
import { CommunityComponent } from './user-features/community/community.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  // {
  //   path: 'facebook/profile',
  //   component: ProfileComponent
  // },
  // {
  //   path: 'facebook/find-friend',
  //   component: FindFriendComponent
  // },
  // {
  //   path: 'facebook/friend-profile/:userId',
  //   component: FriendProfileComponent
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'facebook',
    loadChildren: () => import('./user-features/user-features.module').then(module => module.UserFeaturesModule)
  },
  {
    path: '**',
    redirectTo: 'facebook',
    pathMatch: 'full'
  }

  // {
  //   path: 'facebook/notification',
  //   component: NotificationComponent
  // },
  // {
  //   path: 'facebook/community',
  //   component: CommunityComponent
  // }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
