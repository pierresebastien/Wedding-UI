import { Component, OnInit } from '@angular/core';

import { Restangular } from 'ng2-restangular';

import { HeaderService } from '../shared/services/header.service';
import { GIFT_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {

  bankAccount: string;

  constructor(private HeaderService: HeaderService, private restangular: Restangular) {
    HeaderService.setActiveLink(GIFT_LINK);
  }

  ngOnInit() {
    this.restangular.one('info/account').get().subscribe(info => {
      this.bankAccount = info.message;
    });
  }

}
