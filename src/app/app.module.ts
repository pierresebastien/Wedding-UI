import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestangularModule } from 'ng2-restangular';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutes } from './shared/routes/app.routes';
import { AuthGuard } from './shared/auth.guard';

import { HeaderService } from './shared/services/header.service';
import { UserService } from './shared/services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AlbumComponent } from './album/album.component';
import { GiftComponent } from './gift/gift.component';
import { InvitationComponent } from './invitation/invitation.component';
import { CountdownComponent } from './shared/components/countdown/countdown.component';
import { FormComponent } from './invitation/form/form.component';

export function restangularConfig(RestangularProvider, http) {
  const apiUrl: string = window.location.protocol.concat('//').concat(window.location.hostname).concat('/api');
  RestangularProvider.setBaseUrl(apiUrl);
  RestangularProvider.setDefaultHeaders({ 'Accept': 'application/json' });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlbumComponent,
    GiftComponent,
    InvitationComponent,
    CountdownComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot(),
    RestangularModule.forRoot([Http], restangularConfig),
    ToastrModule.forRoot({
      maxOpened: 0,
      autoDismiss: false,
      newestOnTop: true,
      preventDuplicates: false,
      closeButton: true,
      tapToDismiss: true,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [AuthGuard, HeaderService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
