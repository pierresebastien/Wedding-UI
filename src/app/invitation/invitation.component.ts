import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../shared/services/header.service';
import { INVITATION_LINK } from '../shared/models/link.model';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  constructor(private HeaderService: HeaderService) {
    HeaderService.setActiveLink(INVITATION_LINK);
  }

  ngOnInit() {
  }

}
