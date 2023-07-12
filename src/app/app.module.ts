import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './user-features/profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FindFriendComponent } from './user-features/find-friend/find-friend.component';
import { LoginComponent } from './login/login.component';
import { CommunityComponent } from './user-features/community/community.component';
import { PostOptionsComponent } from './user-features/post-options/post-options.component';
import { ImageComponent } from './user-features/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    NavBarComponent,
    LoginComponent,
    ImageComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
