import { AuthService } from './../../auth.service';
import { Order } from './../../models/order';
import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;

  constructor(
    private authService: AuthService,

    private orderService: OrderService) { 
   // this.orders$ = orderService.getOrders();
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));

  }
}
