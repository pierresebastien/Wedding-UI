import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Restangular } from 'ng2-restangular';

import { User } from '../models/user.model';
import { Invitation } from '../models/invitation.model';

@Injectable()
export class UserService {

  user: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(private restangular: Restangular) {
    this.user = new BehaviorSubject<User>(null);
    this.currentUser = this.user.asObservable();
    this.restangular.one('users/me').get().subscribe(
      user => {
        this.user.next(user);
      },
      err => {
      });
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  getParticipations(userId: string): Observable<Invitation[]> {
    return this.restangular.one('users', userId).getList('invitations');
  }
}
