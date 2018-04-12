import { ShoppingCartService } from './shopping-cart.service';
import { CategoryService } from './category.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
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
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductService } from './product.service';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingChartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFilterComponent,
    ProductFormComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
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
      { path:'order-success', component: OrderSuccessComponent, canActivate:[AuthGuard] },
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
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
