import { Injectable } from '@angular/core';

import { Link, HOME_LINK, MAP_LINK, INVITATION_LINK, GIFT_LINK, ALBUM_LINK } from '../models/link.model';

@Injectable()
export class HeaderService {

  title: string;
  links: Link[];

  constructor() {
    this.title = 'Ju & Seb';
    this.links = [
      { id: HOME_LINK, name: 'Accueil', active: false, url: '/', icon: '' },
      { id: MAP_LINK, name: 'Plan', active: false, url: '/map', icon: '' },
      { id: INVITATION_LINK, name: 'Votre invitation', active: false, url: '/invitation', icon: '' },
      { id: GIFT_LINK, name: 'Liste de cadeaux', active: false, url: '/gift', icon: '' },
      { id: ALBUM_LINK, name: 'Photos', active: false, url: '/album', icon: '' }
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
