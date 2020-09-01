import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiniiComponent } from './linii/linii.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinieDetailComponent } from './linie-detail/linie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: LinieDetailComponent },
  { path: 'linii', component: LiniiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
