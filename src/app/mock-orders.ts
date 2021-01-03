import { Order } from './order';

//created an array of order and exported.
export let ORDERS: Order[] = [
  {
    id: 10,
    custname: 'John',
    items: 1,
    itemname: ['Pizza'],
    price: [100],
    deliveryaddress: 'Sarjapura',
    total_amt: 100,
    status: 1,
  },
  {
    id: 11,
    custname: 'Clark',
    items: 2,
    itemname: ['Pizza', 'Fries'],
    price: [100, 200],
    deliveryaddress: 'Koramangala',
    total_amt: 300,
    status: 1,
  },
  {
    id: 12,
    custname: 'Tina',
    items: 3,
    itemname: ['Pizza', 'Beverages', 'Cheese bread'],
    price: [600, 200, 100],
    deliveryaddress: 'BTM Layout',
    total_amt: 900,
    status: 1,
  },
  {
    id: 13,
    custname: 'Rose',
    items: 2,
    itemname: ['Pizza', 'Garlic bread'],
    price: [700, 300],
    deliveryaddress: 'HSR Layout',
    total_amt: 1000,
    status: 1,
  },
];

//Customer Name, No. of Items ordered, Total Amount of the Order, Status of the Order....
