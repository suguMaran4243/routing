import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseGuardService implements CanActivate
{
    constructor(private authService:AuthService,private route:Router )
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
     {
          if(this.authService.isAuthenticated())
          {
            return true;
          }
          else
          {
            this.route.navigate(['Home']);
            return false;
          }
        
     }
}