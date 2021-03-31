import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalEventDetailsComponent } from './rental-event-details.component';

describe('RentalEventDetailsComponent', () => {
  let component: RentalEventDetailsComponent;
  let fixture: ComponentFixture<RentalEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalEventDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
