import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'orderDetails/:id', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
