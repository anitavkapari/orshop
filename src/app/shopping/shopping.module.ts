import { SharedModule } from './../shared/shared.module';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { ProductFilterComponent } from './component/products/product-filter/product-filter.component';
import { ProductsComponent } from './component/products/products.component';
import { ShippingFormComponent } from './component/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './component/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingChartComponent } from './component/shopping-chart/shopping-chart.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,

    RouterModule.forChild([
    { path:'products', component: ProductsComponent },
      { path:'shopping-chart', component: ShoppingChartComponent },
      
      { path:'check-out', component: CheckOutComponent, canActivate:[AuthGuard]  },
      { path:'order-success/:id', component: OrderSuccessComponent, canActivate:[AuthGuard] },
      { path:'my/orders', component: MyOrderComponent, canActivate:[AuthGuard] },
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingChartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrderComponent,
  ]
})
export class ShoppingModule { }
