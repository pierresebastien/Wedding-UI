import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../shared/services/header.service';
import { MAP_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title: string = 'Gîte le vieux sanglier';
  lat: number = 50.433132;
  lng: number = 6.052190;

  constructor(private HeaderService: HeaderService) {
    HeaderService.setActiveLink(MAP_LINK);
  }

  ngOnInit() {
  }

}
