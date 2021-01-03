import { Component, OnInit } from '@angular/core';
import { ORDERS } from '../mock-orders';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  orders = ORDERS;
  currentId: string;
  id: any;
  routedOrder: any[];
  itemname: string[];

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    //debugger;
    this.currentId = this.router.snapshot.paramMap.get('id');
    // console.log('this.currentId::', this.currentId);
    // console.log(this.orders);

    for (let index in this.orders) {
      //console.log(this.orders[index]);
      if (this.orders[index].id === parseInt(this.currentId)) {
        this.routedOrder = new Array(this.orders[index]);
      }
    }
  }
}
