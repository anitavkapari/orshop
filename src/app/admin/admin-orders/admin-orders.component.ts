import { AuthService } from './../../auth.service';
import { Order } from './../../models/order';
import { OrderService } from './../../order.service';
import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit{

  orders$;


  constructor(private orderService: OrderService,authService:AuthService) { 
    this.orders$ = orderService.getOrders();

  }
    ngOnInit(){

  }
}
