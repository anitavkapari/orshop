import { ShoppingCart } from 'shared/models/shopping-cart';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  name: string;
  userSubscription: Subscription;


  constructor(
    private router: Router,
    private  authService:  AuthService,
    private orderService: OrderService){

    }

  ngOnInit() {
      this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
      
    }

    ngOnDestroy(){
      this.userSubscription.unsubscribe();
   }
    async placeOrder(){
      if(!confirm('Are usure u want to CheckOut?'))return;

      let order = new Order(this.userId,this.shipping,this.cart);
     let result = await this.orderService.placeOrder(order);
      this.router.navigate(['/order-success', result.key]);
    
  }

}
