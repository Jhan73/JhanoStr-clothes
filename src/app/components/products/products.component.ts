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
  showProductDetail = false;
  date = new Date('2-25-2023');
  myshoppingCart: Product[]=[];
  product!: Product;
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
  toggleButton(){
    this.showProductDetail = !this.showProductDetail;
  }
  onShowDetails(id: string){
    this.productsService.getProductById(id).subscribe(data =>{
      this.toggleButton();
      this.product = data;
    })
  }
}
