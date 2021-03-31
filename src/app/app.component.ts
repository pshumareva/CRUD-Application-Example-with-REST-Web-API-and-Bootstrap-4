import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rent-A-Car';

  static fuelTypes: Array<Object> = [
    { num: 0, name: 'petrol' },
    { num: 1, name: 'diesel' },
    { num: 2, name: 'hybrid' },
    { num: 3, name: 'electric' }
  ];

  static vehicleTypes: Array<Object> = [
    { num: 0, name: 'economy' },
    { num: 1, name: 'luxury' },
    { num: 2, name: 'estate' },
    { num: 3, name: 'SUV' },
    { num: 4, name: 'cargo' }
  ];
}
