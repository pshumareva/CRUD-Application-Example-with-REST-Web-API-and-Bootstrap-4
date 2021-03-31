import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalEventListComponent } from './rental-event-list.component';

describe('RentalEventListComponent', () => {
  let component: RentalEventListComponent;
  let fixture: ComponentFixture<RentalEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
