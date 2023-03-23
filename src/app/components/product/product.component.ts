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
    images : [],
    price : 0,
    title: "",
    description: "",
    category: {
      id: 0,
      name : "",
      typeImg: ""
    }
  };
  @Output()
  addProduct = new EventEmitter<Product>();
  @Output()
  showDetail = new EventEmitter<string>();
  addToCart(){
    this.addProduct.emit(this.product);
  }

  showDetails(){
    this.showDetail.emit(this.product.id)
  }
}
