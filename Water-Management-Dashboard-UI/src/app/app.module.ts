import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboarddataService } from './dashboard/dashboarddata.service';
import { HttpClientModule } from '@angular/common/http';
import { DatainputService } from './data-input/datainput.service';

@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'about', component: AboutComponent},
      {path: 'data', component: DataInputComponent}

    ])
  ],
  providers: [DashboarddataService, DatainputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
