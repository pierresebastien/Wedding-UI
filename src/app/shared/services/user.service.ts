import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ng2-restangular';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  user: User;

  constructor(private restangular: Restangular) { }

  getCurrentUser(): Observable<User> {
    if (this.user != null) {
      return Observable.of(this.user);
    }
    else {
      var observable = this.restangular.one('user/me').get();
      observable.subscribe(x => this.user = x);
      return observable;
    }
  }
}
