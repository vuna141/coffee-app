import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const email = localStorage.getItem('email');
        const pass = localStorage.getItem('password');
        // if(this.authService.authenticate(email, pass)){
        //     return true
        // } else {
        //     this.router.navigate(['login']);
        //     return false;
        // }
        return true;
    }
}