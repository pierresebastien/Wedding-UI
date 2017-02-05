import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ng2-restangular';

import { HeaderService } from '../shared/services/header.service';
import { UserService } from '../shared/services/user.service';
import { HOME_LINK } from '../shared/models/link.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weddingDate: Date;
  currentUser: User;

  constructor(private HeaderService: HeaderService, private restangular: Restangular, private UserService: UserService) {
  }

  ngOnInit() {
    this.HeaderService.setActiveLink(HOME_LINK);
    this.UserService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    this.weddingDate = new Date(2017, 5, 10, 14, 0, 0);
    this.restangular.one('info/date').get().subscribe(info => {
      this.weddingDate = new Date(info.date);
    });
  }
}
