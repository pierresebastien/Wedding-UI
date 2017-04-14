import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { Link, HOME_LINK, INVITATION_LINK, GIFT_LINK, ALBUM_LINK } from '../models/link.model';
import { UserService } from './user.service';

@Injectable()
export class HeaderService {

  title: string;
  links: Link[];

  constructor(private UserService: UserService) {
    this.title = 'Ju & Seb';
    this.links = [
      new Link(HOME_LINK, 'Accueil', '/', false),
      new Link(INVITATION_LINK, 'Ton invitation', '/invitation', false),
      new Link(GIFT_LINK, 'Liste de mariage', '/gift', true),
      new Link(ALBUM_LINK, 'Photos', '/album', true)
    ];
  }

  getLinks(): Link[] {
     return this.links;
  }

  getTitle(): string {
    return this.title;
  }

  setActiveLink(id: number) {
    _.forEach(_.filter(this.links, x => x.active), x => x.active = false);
    _.first(_.filter(this.links, x => x.id === id)).active = true;
  }
}
