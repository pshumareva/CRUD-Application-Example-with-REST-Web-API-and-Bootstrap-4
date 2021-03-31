import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  vehicle = {
    vehicleType: 0,
    brand: '',
    model: '',
    constructionYear: 0,
    fuelType: 0,
    numberOfSeats: 0,
    picture: '',
    pricePerDay: 0,
    count: 0,
    available: false
  };

  fuelTypes: Array<Object> = [];
  vehicleTypes: Array<Object> = [];

  submitted = false;

  constructor(private vehicleService: VehicleService) {
    this.fuelTypes = AppComponent.fuelTypes;
    this.vehicleTypes = AppComponent.vehicleTypes
  }

  ngOnInit(): void {
  }

  createVehicle(): void {
    const data = {
      vehicleType: this.vehicle.vehicleType,
      brand: this.vehicle.brand,
      model: this.vehicle.model,
      constructionYear: this.vehicle.constructionYear,
      fuelType: this.vehicle.fuelType,
      numberOfSeats: this.vehicle.numberOfSeats,
      picture: this.vehicle.picture,
      pricePerDay: this.vehicle.pricePerDay,
      count: this.vehicle.count
    };

    this.vehicleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newVehicle(): void {
    this.submitted = false;
    this.vehicle = {
      vehicleType: 0,
      brand: '',
      model: '',
      constructionYear: 0,
      fuelType: 0,
      numberOfSeats: 0,
      picture: '',
      pricePerDay: 0,
      count: 0,
      available: false
    };
  }

}
