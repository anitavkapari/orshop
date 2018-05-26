import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { CategoryService } from 'shared/services/category.service';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { UserService } from 'shared/services/user.service';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingChartComponent } from './shopping-chart/shopping-chart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/component/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/component/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/component/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductService } from 'shared/services/product.service';
import { ProductCardComponent } from 'shared/component/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/component/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { MyOrderComponent } from './my-order/my-order.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingChartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrderComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path:'', component: ProductsComponent },
      { path:'products', component: ProductsComponent },
      { path:'shopping-chart', component: ShoppingChartComponent },
      { path:'login', component:  LoginComponent},
      
      { path:'check-out', component: CheckOutComponent, canActivate:[AuthGuard]  },
      { path:'order-success/:id', component: OrderSuccessComponent, canActivate:[AuthGuard] },
      { path:'my/orders', component: MyOrderComponent, canActivate:[AuthGuard] },
  
      
     { path:'admin/products/new', 
      component: ProductFormComponent, 
      canActivate:[AuthGuard,AdminAuthGuard]
     },
     { path:'admin/products/:id', 
      component: ProductFormComponent, 
      canActivate:[AuthGuard,AdminAuthGuard]
     },
     { path:'admin/products', 
      component: AdminProductsComponent, 
      canActivate:[AuthGuard,AdminAuthGuard]
     },
      { path:'admin/orders', 
      component: AdminOrdersComponent, 
      canActivate:[AuthGuard,AdminAuthGuard] 
    },
    ])
  ],
  providers: [
    AdminAuthGuard,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
