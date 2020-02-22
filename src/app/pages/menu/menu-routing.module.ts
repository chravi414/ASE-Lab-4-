import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children : [
      {
        path : 'index',
        loadChildren: () => import('./../user-index/user-index.module').then(m => m.UserIndexPageModule)
      },
      {
        path : 'profile',
        loadChildren : () => import('./../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('./../user-account/user-account.module').then(m=> m.UserAccountPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
