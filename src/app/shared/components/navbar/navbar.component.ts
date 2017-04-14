import { Component, OnInit } from '@angular/core';

import { Link } from '../../models/link.model';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  title: string;
  links: Link[];

  constructor(private HeaderService: HeaderService) {
  }

  ngOnInit() {
    this.title = this.HeaderService.getTitle();
    this.HeaderService.getLinks().subscribe(links => this.links = links);
  }
}
