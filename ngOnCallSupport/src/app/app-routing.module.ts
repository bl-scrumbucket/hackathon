import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupportDashboardComponent }   from './components/support-dashboard/support-dashboard.component';
import { OnCallEmpDetailComponent }      from './components/on-call-emp-detail/on-call-emp-detail.component';
import { OnCallEmpFormComponent }  from './components/on-call-emp-form/on-call-emp-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/support-dashboard', pathMatch: 'full' },
  { path: 'support-dashboard', component: SupportDashboardComponent },
  { path: 'detail/:id', component: OnCallEmpDetailComponent },
  { path: 'empForm', component: OnCallEmpFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
