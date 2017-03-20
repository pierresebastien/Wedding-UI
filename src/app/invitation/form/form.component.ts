import { Component, Input, OnInit } from '@angular/core';

import { Restangular } from 'ng2-restangular';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';

import { UserService } from '../../shared/services/user.service';
import { User, BaseUser } from '../../shared/models/user.model';
import { Participation, Attending } from '../../shared/models/participation.model';
import { Invitation } from '../../shared/models/invitation.model';

@Component({
  selector: 'app-invitation-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() currentUser: User;
  @Input() user: BaseUser;

  participation: Participation;
  invitations: Invitation[];
  showAddresses: number[];

  constructor(private restangular: Restangular, private UserService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.participation = new Participation(this.user.id, this.user.street, this.user.number, this.user.zipCode, this.user.city,
      this.user.box, this.user.additionnalInfos);
    this.UserService.getParticipations(this.user.id).subscribe(invitations => {
      let lastPlaceId = '';
      for (let i of invitations) {
        if (lastPlaceId !== i.placeId) {
          i.showAddress = true;
        }
        lastPlaceId = i.placeId;
      }
      this.participation.attendings = _.map(invitations, x => new Attending(x.eventId, x.isAttending));
      this.invitations = invitations;
    });
  }

  onSubmit() {
    this.restangular.one('users', this.currentUser.id)
      .post('invitations', this.participation)
      .subscribe(
      response => {
        this.currentUser.isRegistrationCompleted = true;
        this.toastrService.success('Ta réponse a bien été reçue');
      });
  }
}
