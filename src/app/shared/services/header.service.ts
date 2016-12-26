import { Injectable } from '@angular/core';

import { Link } from '../models/link.model';

@Injectable()
export class HeaderService {

  title: string;
  links: Link[];

  constructor() {
    this.title = 'Ju & Seb';
    this.links = [
      { name: 'Accueil', active: true, url: '#', icon: '' },
      { name: 'Cérémonie', active: false, url: '#', icon: '' },
      { name: 'Plan', active: false, url: '#', icon: '' },
      { name: 'Confirmation', active: false, url: '#', icon: '' },
      { name: 'Liste', active: false, url: '#', icon: '' },
      { name: 'Photos', active: false, url: '#', icon: '' }
    ];
  }

  getLinks(): Link[] {
    return this.links;
  }

  getTitle(): string {
    return this.title;
  }

  
}
