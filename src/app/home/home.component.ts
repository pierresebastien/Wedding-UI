import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../shared/services/header.service';
import { HOME_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weddingDate = new Date(2017, 5, 10, 14, 0, 0);

  constructor(private HeaderService: HeaderService) {
    HeaderService.setActiveLink(HOME_LINK);
  }

  ngOnInit() {
  }

}
