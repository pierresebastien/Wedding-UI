import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { Link, HOME_LINK, INVITATION_LINK, GIFT_LINK, ALBUM_LINK } from '../models/link.model';
import { UserService } from './user.service';

@Injectable()
export class HeaderService {

  title: string;
  allLinks: Link[];
  availableLinks: Link[];

  constructor(private UserService: UserService) {
    this.title = 'Ju & Seb';
    this.allLinks = [
      new Link(HOME_LINK, 'Accueil', '/', false),
      new Link(INVITATION_LINK, 'Ton invitation', '/invitation', false),
      new Link(GIFT_LINK, 'Liste de mariage', '/gift', true),
      new Link(ALBUM_LINK, 'Photos', '/album', true)
    ];
    this.availableLinks = _.filter(this.allLinks, x => !x.needAuth);
  }

  getLinks(): Observable<Link[]> {
    return this.UserService.getCurrentUser().map(user => {
      if (user != null) {
        this.availableLinks = this.allLinks;
      } else {
        this.availableLinks = _.filter(this.allLinks, x => !x.needAuth);
      }
      return this.availableLinks;
    });
  }

  getTitle(): string {
    return this.title;
  }

  setActiveLink(id: number) {
    _.forEach(_.filter(this.availableLinks, x => x.active), x => x.active = false);
    _.first(_.filter(this.availableLinks, x => x.id === id)).active = true;
  }
}
