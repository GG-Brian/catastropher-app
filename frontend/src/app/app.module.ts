import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// components intended to be always on display
import { ItcFooterComponent } from './itc-footer/itc-footer.component';
import { ItcBarComponent } from './itc-bar/itc-bar.component';

// views with database data and management
import { DisasterComponent } from './disaster/disaster.component';
import { HelpgroupComponent } from './helpgroup/helpgroup.component';
import { RelationDisasterGroupComponent } from './relation-disaster-group/relation-disaster-group.component';
import { SupporterComponent } from './supporter/supporter.component';

// other component views
import { LoginComponent } from './login/login.component';
import { MeetUsComponent } from './meet-us/meet-us.component';


@NgModule({
  declarations: [
    AppComponent,
    DisasterComponent,
    HelpgroupComponent,
    RelationDisasterGroupComponent,
    SupporterComponent,
    LoginComponent,
    MeetUsComponent,
    ItcBarComponent,
    ItcFooterComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
