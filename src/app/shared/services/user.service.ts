import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Restangular } from 'ng2-restangular';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  user: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(private restangular: Restangular) {
    this.user = new BehaviorSubject<User>(null);
    this.currentUser = this.user.asObservable();
    this.restangular.one('user/me').get().subscribe(
      user => {
        this.user.next(user);
      },
      err => {
      });
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }
}
