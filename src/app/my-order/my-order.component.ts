import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService) {

    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}
