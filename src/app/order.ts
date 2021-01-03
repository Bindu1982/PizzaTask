export interface Order {
  id: number;
  custname: string;
  items: number;
  itemname: string[];
  price: number[];
  deliveryaddress: string;
  total_amt: number;
  status: number;
}
