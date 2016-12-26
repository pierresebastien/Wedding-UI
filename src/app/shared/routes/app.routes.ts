import { HomeComponent } from '../../home/home.component';
import { AlbumComponent } from '../../album/album.component';

export const AppRoutes = [
  { path: '', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: 'album', component: AlbumComponent, name: 'Album'}
];
