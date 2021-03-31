import { Component, OnInit } from '@angular/core';
import { RentalEventService } from 'src/app/services/rental-event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rental-event-details',
  templateUrl: './rental-event-details.component.html',
  styleUrls: ['./rental-event-details.component.css']
})
export class RentalEventDetailsComponent implements OnInit {
  currentRentalEvent = null;
  message = '';

  constructor(
    private rentalEventService: RentalEventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getRentalEvent(this.route.snapshot.paramMap.get('id'));
  }

  getRentalEvent(id): void {
    this.rentalEventService.read(id)
      .subscribe(
        rentalEvent => {
          this.currentRentalEvent = rentalEvent;
          console.log(rentalEvent);
        },
        error => {
          console.log(error);
        });
  }

  setAvailableStatus(status): void {
    const data = {
      startDate: this.currentRentalEvent.startDate,
      endDate: this.currentRentalEvent.endDate,
      vehicle: this.currentRentalEvent.vehicle,
      customer: this.currentRentalEvent.customer,
      available: status
    };

    this.rentalEventService.update(this.currentRentalEvent.id, data)
      .subscribe(
        response => {
          this.currentRentalEvent.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateRentalEvent(): void {
    this.rentalEventService.update(this.currentRentalEvent.id, this.currentRentalEvent)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The rentalEvent was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRentalEvent(): void {
    this.rentalEventService.delete(this.currentRentalEvent.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/rentalEvents']);
        },
        error => {
          console.log(error);
        });
  }
}
