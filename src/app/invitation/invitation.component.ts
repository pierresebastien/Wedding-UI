import { Component, OnInit } from '@angular/core';

import { Restangular } from 'ng2-restangular';

import { HeaderService } from '../shared/services/header.service';
import { UserService } from '../shared/services/user.service';
import { INVITATION_LINK } from '../shared/models/link.model';
import { User } from '../shared/models/user.model';
import { Participation } from '../shared/models/participation.model';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  currentUser: User;
  participation: Participation;

  constructor(private HeaderService: HeaderService, private restangular: Restangular, private UserService: UserService) {
  }

  ngOnInit() {
    this.HeaderService.setActiveLink(INVITATION_LINK);
    this.UserService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      if (user != null) {
        this.participation = new Participation(user.id, User.getAddress(user), user.additionnalInfos);
      }
    });
  }

  onsubmit() {

  }
}
