import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleCreateComponent } from './components/vehicle-create/vehicle-create.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { RentalEventListComponent } from './components/rental-event-list/rental-event-list.component';
import { RentalEventDetailsComponent } from './components/rental-event-details/rental-event-details.component';
import { RentalEventCreateComponent } from './components/rental-event-create/rental-event-create.component';


const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/:id', component: VehicleDetailsComponent },
  { path: 'vehiclescreate', component: VehicleCreateComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'customerscreate', component: CustomerCreateComponent },
  { path: 'rentalEvents', component: RentalEventListComponent },
  { path: 'rentalEvents/:id', component: RentalEventDetailsComponent },
  { path: 'rentalEventscreate', component: RentalEventCreateComponent }
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
