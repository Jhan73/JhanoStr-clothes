import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[]=[];

  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
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
