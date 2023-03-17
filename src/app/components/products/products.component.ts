import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products : Product []= [
    {
      id: "1",
      image : "./assets/image/zapado-negro-de-cuero.png",
      price : 225,
      name: "zapado negro de cuero"
    },
    {
      id: "2",
      image : "./assets/image/zapatilla-azulverde-deportiva.png",
      price : 250,
      name: "zapatilla azul verde deportiva"
    },
    {
      id: "3",
      image : "./assets/image/zapatilla-naranja-clasica.png",
      price : 150,
      name: "zapatilla naranja clasica"
    },
    {
      id: "4",
      image : "./assets/image/zapatilla-rojonegro-deportiva.png",
      price : 145,
      name: "zapatilla rojo negro deportiva"
    },
    {
      id: "5",
      image : "./assets/image/zapatilla-verde-deportiva.png",
      price : 169,
      name: "zapatilla verde deportiva"
    },
    {
      id: "6",
      image : "./assets/image/zapato-marron-de-cuero.png",
      price : 135,
      name: "zapato marron de cuero"
    },
    {
      id: "7",
      image : "./assets/image/zapatos-con-alzas.png",
      price : 165,
      name: "zapatos con alzas"
    }
  ];
  cantProducts = 0;
  totalPrice = 0;
  myshoppingCart: Product[]=[];
  constructor(
    private storeService: StoreService
  ){
    this.myshoppingCart = this.storeService.getMyShoppingCart();
  }
  addToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotalPrice();
    this.cantProducts = this.storeService.getTotalQuantityOfProducts();
  }
}
