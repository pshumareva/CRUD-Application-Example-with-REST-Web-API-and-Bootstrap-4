import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  currentCustomer = null;
  message = '';

  constructor( 
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
  }

  getCustomer(id): void {
    this.customerService.read(id)
      .subscribe(
        customer => {
          this.currentCustomer = customer;
          console.log(customer);
        },
        error => {
          console.log(error);
        });
  }

  setAvailableStatus(status): void {
    const data = {
      name: this.currentCustomer.name,
      email: this.currentCustomer.email,
      phone: this.currentCustomer.phone,
      available: status
    };

    this.customerService.update(this.currentCustomer.id, data)
      .subscribe(
        response => {
          this.currentCustomer.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.id, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The customer was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          console.log(error);
        });
  }
}

