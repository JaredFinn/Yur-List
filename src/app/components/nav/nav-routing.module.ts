import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.ExploreComponentModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then(m => m.ListComponentModule)
      },
      {
        path: '',
        redirectTo: '/nav/explore',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nav/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class NavComponentRoutingModule {}
