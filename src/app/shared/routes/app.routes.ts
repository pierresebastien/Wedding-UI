import { HomeComponent } from '../../home/home.component';
import { AlbumComponent } from '../../album/album.component';
import { MapComponent } from '../../map/map.component';
import { InvitationComponent } from '../../invitation/invitation.component';
import { GiftComponent } from '../../gift/gift.component';

export const AppRoutes = [
  { path: '', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: 'album', component: AlbumComponent, name: 'Album'},
  { path: 'map', component: MapComponent, name: 'Map'},
  { path: 'invitation', component: InvitationComponent, name: 'Invitation'},
  { path: 'gift', component: GiftComponent, name: 'Gift'}
];
