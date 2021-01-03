import { Component, OnInit } from '@angular/core';
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
  getColor(status) {
    switch (status) {
      case 1:
        return 'green';
      case 2:
        return 'blue';
      case 3:
        return 'orangered';
    }
  }

  incOrderStatus(id) {
    if (this.orders[id].status <= 2) this.orders[id].status++;
  }

  getStatusNameFromVal(val) {
    //  console.log('VAL=', val);
    switch (val) {
      case 1:
        return 'Order Received';
      case 2:
        return 'Preparing';
      case 3:
        return 'Ready to Serve';
      default:
        return 'Error State';
    }
  }

  resetCounter() {
    this.counter = 0;
  }
}
