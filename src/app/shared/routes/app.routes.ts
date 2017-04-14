import { Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { HomeComponent } from '../../home/home.component';
import { AlbumComponent } from '../../album/album.component';
import { InvitationComponent } from '../../invitation/invitation.component';
import { GiftComponent } from '../../gift/gift.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'album', component: AlbumComponent, canActivate: [AuthGuard] },
  { path: 'invitation', component: InvitationComponent },
  { path: 'gift', component: GiftComponent, canActivate: [AuthGuard] }
];
