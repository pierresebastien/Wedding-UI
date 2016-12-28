import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppRoutes } from './shared/routes/app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderService } from './shared/services/header.service';
import { AlbumComponent } from './album/album.component';
import { MapComponent } from './map/map.component';
import { GiftComponent } from './gift/gift.component';
import { InvitationComponent } from './invitation/invitation.component';
import { CountdownComponent } from './shared/components/countdown/countdown.component';
import { FormComponent } from './invitation/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlbumComponent,
    MapComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDk6xj1gWOzcLEqPtXlKfWjiWkSd66RXt0'
    })
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
