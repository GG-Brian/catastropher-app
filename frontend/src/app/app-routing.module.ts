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
  
  { path: 'disaster-create', loadChildren: () => import('./modalviews/disaster/disaster-create/disaster-create.module').then( m => m.DisasterCreatePageModule)},
  { path: 'disaster-update', loadChildren: () => import('./modalviews/disaster/disaster-update/disaster-update.module').then( m => m.DisasterUpdatePageModule)},
  { path: 'disaster-delete', loadChildren: () => import('./modalviews/disaster/disaster-delete/disaster-delete.module').then( m => m.DisasterDeletePageModule)},
  { path: 'disaster-create-confirm', loadChildren: () => import('./modalviews/disaster/disaster-create-confirm/disaster-create-confirm.module').then( m => m.DisasterCreateConfirmPageModule)},
  { path: 'disaster-update-confirm', loadChildren: () => import('./modalviews/disaster/disaster-update-confirm/disaster-update-confirm.module').then( m => m.DisasterUpdateConfirmPageModule)},
  { path: 'disaster-delete-confirm', loadChildren: () => import('./modalviews/disaster/disaster-delete-confirm/disaster-delete-confirm.module').then( m => m.DisasterDeleteConfirmPageModule)},
  
  { path: 'group-create', loadChildren: () => import('./modalviews/group/group-create/group-create.module').then( m => m.GroupCreatePageModule)},
  { path: 'group-update', loadChildren: () => import('./modalviews/group/group-update/group-update.module').then( m => m.GroupUpdatePageModule)},
  { path: 'group-delete', loadChildren: () => import('./modalviews/group/group-delete/group-delete.module').then( m => m.GroupDeletePageModule)},
  { path: 'group-create-confirm', loadChildren: () => import('./modalviews/group/group-create-confirm/group-create-confirm.module').then( m => m.GroupCreateConfirmPageModule)},
  { path: 'group-update-confirm', loadChildren: () => import('./modalviews/group/group-update-confirm/group-update-confirm.module').then( m => m.GroupUpdateConfirmPageModule)},
  { path: 'group-delete-confirm', loadChildren: () => import('./modalviews/group/group-delete-confirm/group-delete-confirm.module').then( m => m.GroupDeleteConfirmPageModule)},
  
  { path: 'supporter-create', loadChildren: () => import('./modalviews/supporter/supporter-create/supporter-create.module').then( m => m.SupporterCreatePageModule)},
  { path: 'supporter-update', loadChildren: () => import('./modalviews/supporter/supporter-update/supporter-update.module').then( m => m.SupporterUpdatePageModule)},
  { path: 'supporter-delete', loadChildren: () => import('./modalviews/supporter/supporter-delete/supporter-delete.module').then( m => m.SupporterDeletePageModule)},
  { path: 'supporter-create-confirm', loadChildren: () => import('./modalviews/supporter/supporter-create-confirm/supporter-create-confirm.module').then( m => m.SupporterCreateConfirmPageModule)},
  { path: 'supporter-update-confirm', loadChildren: () => import('./modalviews/supporter/supporter-update-confirm/supporter-update-confirm.module').then( m => m.SupporterUpdateConfirmPageModule)},
  { path: 'supporter-delete-confirm', loadChildren: () => import('./modalviews/supporter/supporter-delete-confirm/supporter-delete-confirm.module').then( m => m.SupporterDeleteConfirmPageModule)},
  
  { path: 'relation-create', loadChildren: () => import('./modalviews/relation/relation-create/relation-create.module').then( m => m.RelationCreatePageModule)},
  { path: 'relation-update', loadChildren: () => import('./modalviews/relation/relation-update/relation-update.module').then( m => m.RelationUpdatePageModule)},
  { path: 'relation-delete', loadChildren: () => import('./modalviews/relation/relation-delete/relation-delete.module').then( m => m.RelationDeletePageModule)},
  { path: 'relation-create-confirm', loadChildren: () => import('./modalviews/relation/relation-create-confirm/relation-create-confirm.module').then( m => m.RelationCreateConfirmPageModule)},
  { path: 'relation-update-confirm', loadChildren: () => import('./modalviews/relation/relation-update-confirm/relation-update-confirm.module').then( m => m.RelationUpdateConfirmPageModule)},
  { path: 'relation-delete-confirm', loadChildren: () => import('./modalviews/relation/relation-delete-confirm/relation-delete-confirm.module').then( m => m.RelationDeleteConfirmPageModule)},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }