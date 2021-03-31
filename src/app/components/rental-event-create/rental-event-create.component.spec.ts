import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalEventCreateComponent } from './rental-event-create.component';

describe('RentalEventCreateComponent', () => {
  let component: RentalEventCreateComponent;
  let fixture: ComponentFixture<RentalEventCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalEventCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
