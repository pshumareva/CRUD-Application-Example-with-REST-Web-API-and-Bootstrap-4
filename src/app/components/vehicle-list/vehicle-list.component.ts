import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: any;
  currentVehicle = null;
  currentIndex = -1;
  brand = '';

  fuelTypes: Array<Object> = [];
  vehicleTypes: Array<Object> = [];

  constructor(private vehicleService: VehicleService) {
    this.fuelTypes = AppComponent.fuelTypes;
    this.vehicleTypes = AppComponent.vehicleTypes;
  }

  ngOnInit(): void {
    this.readVehicles();
  }

  readVehicles(): void {
    this.vehicleService.readAll()
      .subscribe(
        vehicles => {
          this.vehicles = vehicles;
          console.log(vehicles);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readVehicles();
    this.currentVehicle = null;
    this.currentIndex = -1;
  }

  setCurrentVehicle(vehicle: null, index: number): void {
    this.currentVehicle = vehicle;
    this.currentIndex = index;
  }

  deleteAllVehicles(): void {
    this.vehicleService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readVehicles();
        },
        error => {
          console.log(error);
        });
  }

  searchByBrand(): void {
    this.vehicleService.searchByBrand(this.brand)
      .subscribe(
        vehicles => {
          this.vehicles = vehicles;
          console.log(vehicles);
        },
        error => {
          console.log(error);
        });
  }
}
