import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule  }    from '@angular/common/http';
import { HttpModule  }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { SupportDashboardComponent } from './components/support-dashboard/support-dashboard.component';
import { OnCallEmpDetailComponent } from './components/on-call-emp-detail/on-call-emp-detail.component';
import { OnCallEmpFormComponent } from './components/on-call-emp-form/on-call-emp-form.component';
import { CrudServiceService }          from './crud-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SupportDashboardComponent,
    OnCallEmpDetailComponent,
    OnCallEmpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [CrudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
