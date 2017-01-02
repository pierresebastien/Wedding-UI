import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Link, HOME_LINK, MAP_LINK, INVITATION_LINK, GIFT_LINK, ALBUM_LINK } from '../models/link.model';

@Injectable()
export class HeaderService {

  title: string;
  links: Link[];

  constructor() {
    this.title = 'Ju & Seb';
    this.links = [
      new Link(HOME_LINK, 'Accueil', '/'),
      new Link(MAP_LINK, 'Plan', '/map'),
      new Link(INVITATION_LINK, 'Votre invitation', '/invitation'),
      new Link(GIFT_LINK, 'Liste de cadeaux', '/gift'),
      new Link(ALBUM_LINK, 'Photos', '/album')
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
