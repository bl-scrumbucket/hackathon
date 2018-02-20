import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SupportDashboardComponent } from './components/support-dashboard/support-dashboard.component';
import { OnCallEmpDetailComponent } from './components/on-call-emp-detail/on-call-emp-detail.component';
import { OnCallEmpFormComponent } from './components/on-call-emp-form/on-call-emp-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SupportDashboardComponent,
    OnCallEmpDetailComponent,
    OnCallEmpFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
