import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Restangular } from 'ng2-restangular';

import { User } from '../models/user.model';
import { Invitation } from '../models/invitation.model';

@Injectable()
export class UserService {

  user: ReplaySubject<User>;
  currentUser: Observable<User>;

  constructor(private restangular: Restangular) {
    this.user = new ReplaySubject<User>();
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
