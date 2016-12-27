import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../shared/services/header.service';
import { GIFT_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {

    constructor(private HeaderService: HeaderService) {
    HeaderService.setActiveLink(GIFT_LINK);
  }

  ngOnInit() {
  }

}
