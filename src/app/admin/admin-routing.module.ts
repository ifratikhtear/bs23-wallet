import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './admin-home.component';


const routes: Routes = [
  {
    path: '', component: AdminHomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
