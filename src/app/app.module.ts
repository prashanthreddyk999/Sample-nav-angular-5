import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelComponent } from './travelVisaComponent/travel.component';
import { dashboardComponent } from './dashboardComponent/dashboard.component';
import { BusinessComponent } from './businessComponent/business.component';
import { testComponent } from './test.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    dashboardComponent,
    testComponent,
    TravelComponent,
    BusinessComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
