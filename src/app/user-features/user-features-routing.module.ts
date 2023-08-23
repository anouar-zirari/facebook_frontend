import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FindFriendComponent } from './find-friend/find-friend.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';
import { NotificationComponent } from './notification/notification.component';
import { CommunityComponent } from './community/community.component';
import { MainAppComponent } from './main-app/main-app.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [

  {
    path: '',
    component: MainAppComponent,
    children: [
      {
        path: '',
        redirectTo: 'community',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'find-friend',
        component: FindFriendComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'friend-profile/:userId',
        component: FriendProfileComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'notification',
        component: NotificationComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'community',
        component: CommunityComponent,
        canActivate: [AuthGuardGuard]
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFeaturesRoutingModule { }
