import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserIndexPage } from './user-index.page';

const routes: Routes = [
  {
    path: '',
    component: UserIndexPage,
    children : [
    ]
  },
  {
    path: 'venues',
    loadChildren: () => import('../venues/venues.module').then(m => m.VenuesPageModule)
  },
  {
    path: 'knowledge',
    loadChildren: () => import('../knowledge/knowledge.module').then(m => m.KnowledgePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserIndexPageRoutingModule {}
