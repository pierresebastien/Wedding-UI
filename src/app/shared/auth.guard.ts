import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private UserService: UserService) { }

    canActivate(): Observable<boolean> {
        return this.UserService.getCurrentUser().map(user => {
            if (user != null) {
                return true;
            }
            this.router.navigate(['']);
            return false;
        });
    }
}
