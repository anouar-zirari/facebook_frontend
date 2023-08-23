import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './user-features/profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorProvider } from './http-interceptor-provider';
import { TokenExpiredPageComponent } from './token-expired-page/token-expired-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TokenExpiredPageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NavBarComponent,
    LoginComponent,

  ],
  providers: [HttpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
