import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// views with database data and management
import { DisasterComponent } from './views/disaster/disaster.component';
import { HelpgroupComponent } from './views/group/helpgroup.component';
import { RelationDisasterGroupComponent } from './views/relation-disaster-group/relation-disaster-group.component';
import { SupporterComponent } from './views/supporter/supporter.component';

// other component views
import { LoginComponent } from './views/login/login.component';
import { MeetUsComponent } from './views/meet-us/meet-us.component';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule) },

  { path: 'login', component: LoginComponent},
  { path: 'us', component: MeetUsComponent},

  { path: 'disaster', component: DisasterComponent},
  { path: 'group', component: HelpgroupComponent},
  { path: 'disaster-x-group', component: RelationDisasterGroupComponent},
  { path: 'supporter', component: SupporterComponent},

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
