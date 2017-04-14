import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { Link } from '../../models/link.model';
import { HeaderService } from '../../services/header.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  title: string;
  links: Link[];

  constructor(private HeaderService: HeaderService, private UserService: UserService) {
  }

  ngOnInit() {
    this.title = this.HeaderService.getTitle();
    this.links = _.filter(this.HeaderService.getLinks(), x => !x.needAuth);
    this.UserService.getCurrentUser().subscribe(user => {
      this.links = _.filter(this.HeaderService.getLinks(), x => !x.needAuth || user != null);
    });
  }
}
