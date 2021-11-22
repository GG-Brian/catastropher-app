import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// views with database data and management
import { DisasterComponent } from './disaster/disaster.component';
import { HelpgroupComponent } from './helpgroup/helpgroup.component';
import { RelationDisasterGroupComponent } from './relation-disaster-group/relation-disaster-group.component';
import { SupporterComponent } from './supporter/supporter.component';

// other component views
import { LoginComponent } from './login/login.component';
import { MeetUsComponent } from './meet-us/meet-us.component';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },

  { path: 'login', component: LoginComponent},
  { path: 'us', component: MeetUsComponent},

  { path: 'disasters', component: DisasterComponent},
  { path: 'groups', component: HelpgroupComponent},
  { path: 'disaster-x-group', component: RelationDisasterGroupComponent},
  { path: 'supporters', component: SupporterComponent},

  { path: '', redirectTo: "/home", pathMatch: 'full'},
  { path: '**', redirectTo: "/home", pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
