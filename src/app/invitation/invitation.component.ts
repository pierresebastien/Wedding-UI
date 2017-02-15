import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../shared/services/header.service';
import { UserService } from '../shared/services/user.service';
import { INVITATION_LINK } from '../shared/models/link.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  currentUser: User;

  constructor(private HeaderService: HeaderService, private UserService: UserService) {
  }

  ngOnInit() {
    this.HeaderService.setActiveLink(INVITATION_LINK);
    this.UserService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }
}
