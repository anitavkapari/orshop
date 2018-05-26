import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Product } from 'shared/models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[]=[];
filteredProducts: Product[]=[];
category: string;
cart$: Observable<ShoppingCart>;
 
  constructor(
  private  route: ActivatedRoute,
    private productService: ProductService,
   private shoppingCartService:  ShoppingCartService
    ) { 
     }

     async ngOnInit(){
      this.cart$ = await this.shoppingCartService.getCart();
      this.populateProducts()
     }

     private populateProducts(){
      this.productService
      .getAll()
      .subscribe(products => {
       this.products = products;
       return this.route.queryParamMap;
      })
       this.route.queryParamMap.subscribe(params =>{
        this.category=params.get('category');
        this.applyFilter();
      });
     }

     private applyFilter(){
      this.filteredProducts=(this.category) ?         //filter the product
          this.products.filter( p => p.category===this.category) :
          this.products;
     }
  }
