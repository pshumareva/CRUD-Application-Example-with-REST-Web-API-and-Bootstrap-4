import { Component, OnInit } from '@angular/core';
import { RentalEventService } from 'src/app/services/rental-event.service';

@Component({
  selector: 'app-rental-event-create',
  templateUrl: './rental-event-create.component.html',
  styleUrls: ['./rental-event-create.component.css']
})
export class RentalEventCreateComponent implements OnInit {
    rentalEvent = {
    startDate: '',
    endDate: '',
    vehicle: '',
    customer: '',
    available: false
    };
    submitted = false;

  constructor(private rentalEventService: RentalEventService) { }

  ngOnInit(): void {
  }
  createRentalEvent(): void {
    const data = {
      startDate: this.rentalEvent.startDate,
      endDate: this.rentalEvent.endDate,
      vehicle: this.rentalEvent.vehicle,
      customer: this.rentalEvent.customer
    };

    this.rentalEventService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRentalEvent(): void {
    this.submitted = false;
    this.rentalEvent = {
      startDate: '',
      endDate: '',
      vehicle: '',
      customer: '',
      available: false
    };
  }


}
