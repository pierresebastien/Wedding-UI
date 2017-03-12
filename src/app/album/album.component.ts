import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../shared/services/header.service';
import { ALBUM_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(private HeaderService: HeaderService) {
    HeaderService.setActiveLink(ALBUM_LINK);
  }

  ngOnInit() {
  }
}
