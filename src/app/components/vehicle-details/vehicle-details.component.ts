import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  currentVehicle = {
    id: 0,
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
  message = '';

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.fuelTypes = AppComponent.fuelTypes;
    this.vehicleTypes = AppComponent.vehicleTypes;
  }

  ngOnInit(): void {
    this.message = '';
    this.getVehicle(this.route.snapshot.paramMap.get('id'));
  }

  getVehicle(id: string | null): void {
    this.vehicleService.read(id)
      .subscribe(
        vehicle => {
          this.currentVehicle = vehicle;
          console.log(vehicle);
        },
        error => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {

    const data = {
      vehicleType: this.currentVehicle.vehicleType,
      brand: this.currentVehicle.brand,
      model: this.currentVehicle.model,
      constructionYear: this.currentVehicle.constructionYear,
      fuelType: this.currentVehicle.fuelType,
      numberOfSeats: this.currentVehicle.numberOfSeats,
      picture: this.currentVehicle.picture,
      pricePerDay: this.currentVehicle.pricePerDay,
      count: this.currentVehicle.count,
      available: status
    };

    this.vehicleService.update(this.currentVehicle.id, data)
      .subscribe(
        response => {
          this.currentVehicle.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateVehicle(): void {
    this.vehicleService.update(this.currentVehicle.id, this.currentVehicle)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The vehicle was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteVehicle(): void {
    this.vehicleService.delete(this.currentVehicle.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/vehicles']);
        },
        error => {
          console.log(error);
        });
  }

}
