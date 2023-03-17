import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Product []=[];
  cantProducts = 0;
  totalPrice = 0;
  myshoppingCart: Product[]=[];
  constructor(
    private storeService: StoreService, 
    private productsService: ProductsService
  ){
    this.myshoppingCart = this.storeService.getMyShoppingCart();
  }
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(res =>{
      this.products = res;
    })
  }

  addToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotalPrice();
    this.cantProducts = this.storeService.getTotalQuantityOfProducts();
  }
}
