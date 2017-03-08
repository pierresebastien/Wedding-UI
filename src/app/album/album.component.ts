import { Component, OnInit } from '@angular/core';

import { Restangular } from 'ng2-restangular';

import { UserService } from '../shared/services/user.service';
import { HeaderService } from '../shared/services/header.service';
import { ALBUM_LINK } from '../shared/models/link.model';
import { Invitation } from '../shared/models/invitation.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  invitations: Invitation[];

  constructor(private HeaderService: HeaderService, private restangular: Restangular, private UserService: UserService) {
    HeaderService.setActiveLink(ALBUM_LINK);
  }

  ngOnInit() {
    this.UserService.getCurrentUser().subscribe(user => {
      this.UserService.getParticipations(user.id).subscribe(invitations => {
        this.invitations = invitations;
      });
    });
  }
}
