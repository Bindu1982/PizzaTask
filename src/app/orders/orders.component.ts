import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { ORDERS } from '../mock-orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders = ORDERS; // component property defined orders to expose the ORDERS array of binding.
  counter: number;

  constructor() {}

  ngOnInit(): void {
    this.counter = 0;
  }
  getColor(statusname) {
    switch (statusname) {
      case 'Order Received':
        return 'green';
      case 'Preparing':
        return 'blue';
      case 'Ready to serve':
        return 'grey';
    }
  }

  setStatus(idx, currentCounter) {
    //debugger;
    if (this.counter == currentCounter) {
      this.counter++;
    }
  }
}
