import { Component, OnInit } from '@angular/core';

import { Restangular } from 'ng2-restangular';

import { HeaderService } from '../shared/services/header.service';
import { HOME_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weddingDate: Date;
  test: string;

  constructor(private HeaderService: HeaderService, private restangular: Restangular) {
    this.weddingDate = new Date(2017, 5, 10, 14, 0, 0);
  }

  ngOnInit() {
    this.HeaderService.setActiveLink(HOME_LINK);
    this.restangular.one('info').get().subscribe(info => {
      this.test = info.Message;
    });
  }
}
