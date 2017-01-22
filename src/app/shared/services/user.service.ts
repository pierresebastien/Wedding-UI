import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Restangular } from 'ng2-restangular';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  user: User;
  currentUser: Observable<User>;

  constructor(private restangular: Restangular) {
    this.currentUser = this.restangular.one('user/me').get();
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }
}
