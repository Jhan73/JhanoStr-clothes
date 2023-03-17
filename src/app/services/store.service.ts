import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[]=[];

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
  }
  getTotalPrice(){
    return this.myShoppingCart.reduce((sum, item)=>sum+item.price,0)
  }
  getMyShoppingCart(){
    return this.myShoppingCart;
  }
  getTotalQuantityOfProducts(){
    return this.myShoppingCart.length;
  }
}
