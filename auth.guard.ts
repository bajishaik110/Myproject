import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  routes: any;
  constructor(private auth:CoursesService){}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):  boolean {
    if(localStorage.getItem('username')== null){
      return false;
    }
    else
    {
      this.routes.navigate(['/login']);
      return true;
      
    }
}
}
