import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product : Product= {
    id: "",
    image : "",
    price : 0,
    title: "",
    description: "",
    category: "",
    rating: {
      rate: 0,
      count: 0
    }
  };
  @Output()
  addProduct = new EventEmitter<Product>();
  
  addToCart(){
    this.addProduct.emit(this.product);
  }
}
