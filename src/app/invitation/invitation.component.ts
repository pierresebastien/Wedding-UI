import { Component, OnInit } from '@angular/core';

import { Restangular } from 'ng2-restangular';
import { ToastrService } from 'ngx-toastr';

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
  email: string;

  constructor(private HeaderService: HeaderService, private UserService: UserService, private restangular: Restangular,
    private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.HeaderService.setActiveLink(INVITATION_LINK);
    this.UserService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  onSubmit() {
    this.restangular.one('auth').one('recover', this.email)
      .post()
      .subscribe(x => {
        this.toastrService.info('Un email a été envoyé à l\'adresse mentionnée');
      });
  }
}
