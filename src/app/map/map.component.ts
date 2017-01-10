import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../shared/services/header.service';
import { MAP_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title: string;
  lat: number;
  lng: number;

  constructor(private HeaderService: HeaderService) {
    this.title = 'Gîte le vieux sanglier';
    this.lat = 50.433132;
    this.lng = 6.052190;
  }

  ngOnInit() {
    this.HeaderService.setActiveLink(MAP_LINK);
  }

}
