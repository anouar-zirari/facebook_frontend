import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService,
    private activatedRout: ActivatedRoute) { }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (localStorage.getItem("jwtToken") != null) {
      return true;
    } else {
      console.log('**************url*****', this.activatedRout.snapshot); 
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
