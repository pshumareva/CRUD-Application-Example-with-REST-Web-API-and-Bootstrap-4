import { Component, OnInit } from '@angular/core';
import { RentalEventService } from 'src/app/services/rental-event.service';

@Component({
  selector: 'app-rental-event-list',
  templateUrl: './rental-event-list.component.html',
  styleUrls: ['./rental-event-list.component.css']
})
export class RentalEventListComponent implements OnInit {
  rentalEvents: any;
  currentRentalEvent = null;
  currentIndex = -1;
  name = '';

  constructor(private rentalEventService: RentalEventService) { }

  ngOnInit(): void {
    this.readRentalEvents();
  }

  readRentalEvents(): void {
    this.rentalEventService.readAll()
      .subscribe(
        rentalEvents => {
          this.rentalEvents = rentalEvents;
          console.log(rentalEvents);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readRentalEvents();
    this.currentRentalEvent = null;
    this.currentIndex = -1;
  }

  setCurrentRentalEvent(rentalEvent, index): void {
    this.currentRentalEvent = rentalEvent;
    this.currentIndex = index;
  }

  deleteAllRentalEvents(): void {
    this.rentalEventService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readRentalEvents();
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.rentalEventService.searchByName(this.name)
      .subscribe(
        rentalEvent => {
          this.rentalEvents = rentalEvent;
          console.log(rentalEvent);
        },
        error => {
          console.log(error);
        });
  }

}
