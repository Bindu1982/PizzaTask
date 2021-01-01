import { Order } from './order';

//created an array of order and exported.
export let ORDERS: Order[] = [
  {
    id: 10,
    custname: 'John',
    items: 1,
    itemname: 'Pizza',
    price: 100,
    deliveryaddress: 'Sarjapur',
    total_amt: 100,
    status: [
      { id: 1, status_name: 'Order Received' },
      { id: 2, status_name: 'Preparing' },
      { id: 3, status_name: 'Ready to serve' },
    ],
  },
  {
    id: 11,
    custname: 'Clark',
    items: 2,
    itemname: 'Pizza, fries',
    price: 200,
    deliveryaddress: 'Kormangala',
    total_amt: 200,
    status: [
      { id: 1, status_name: 'Order Received' },
      { id: 2, status_name: 'Preparing' },
      { id: 3, status_name: 'Ready to serve' },
    ],
  },
  {
    id: 12,
    custname: 'Tina',
    items: 3,
    itemname: 'Pizza, beverage, bread',
    price: 700,
    deliveryaddress: 'BTMLayout',
    total_amt: 700,
    status: [
      { id: 1, status_name: 'Order Received' },
      { id: 2, status_name: 'Preparing' },
      { id: 3, status_name: 'Ready to serve' },
    ],
  },
  {
    id: 13,
    custname: 'Rose',
    items: 2,
    itemname: 'Pizza, garlicbread',
    price: 700,
    deliveryaddress: 'HSRLayout',
    total_amt: 1000,
    status: [
      { id: 1, status_name: 'Order Received' },
      { id: 2, status_name: 'Preparing' },
      { id: 3, status_name: 'Ready to serve' },
    ],
  },
];

//Customer Name, No. of Items ordered, Total Amount of the Order, Status of the Order
