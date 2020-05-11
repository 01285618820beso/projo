import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGurdService implements CanActivate{

  constructor(private Ser :AuthService , private router :Router) 
  {

   }
  canActivate(router , route : RouterStateSnapshot ){
return this.Ser.user.pipe(map(
  user=>{
    if(user){return true;}
    else{    this.router.navigate(['/login'],{queryParams : {returnurl:route.url}})
            return false ;}
  }
))
  }

 }
