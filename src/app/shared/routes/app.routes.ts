import { HomeComponent } from '../../home/home.component';
import { AlbumComponent } from '../../album/album.component';
import { MapComponent } from '../../map/map.component';

export const AppRoutes = [
  { path: '', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: 'album', component: AlbumComponent, name: 'Album'},
  { path: 'map', component: MapComponent, name: 'Map'}
];
