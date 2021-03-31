import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleCreateComponent } from './components/vehicle-create/vehicle-create.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { RentalEventCreateComponent } from './components/rental-event-create/rental-event-create.component';
import { RentalEventDetailsComponent } from './components/rental-event-details/rental-event-details.component';
import { RentalEventListComponent } from './components/rental-event-list/rental-event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleCreateComponent,
    VehicleDetailsComponent,
    VehicleListComponent,
    CustomerCreateComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    RentalEventCreateComponent,
    RentalEventDetailsComponent,
    RentalEventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
