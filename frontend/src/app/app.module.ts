import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// views with database data and management
import { DisasterComponent } from './views/disaster/disaster.component';
import { HelpgroupComponent } from './views/group/helpgroup.component';
import { RelationDisasterGroupComponent } from './views/relation-disaster-group/relation-disaster-group.component';
import { SupporterComponent } from './views/supporter/supporter.component';

// other component views
import { LoginComponent } from './views/login/login.component';
import { MeetUsComponent } from './views/meet-us/meet-us.component';

// Used into meet-us view for document carousel injection
import { JavascriptLoaderService } from "./services/javascript-loader.service"
import { SharedModuleModule } from './shared-components/shared-module';


@NgModule({
  declarations: [
    AppComponent,
    DisasterComponent,
    HelpgroupComponent,
    RelationDisasterGroupComponent,
    SupporterComponent,
    LoginComponent,
    MeetUsComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModuleModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, JavascriptLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
