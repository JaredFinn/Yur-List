import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then(m => m.ListComponentModule)
      },
      {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nav/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class NavComponentRoutingModule {}
