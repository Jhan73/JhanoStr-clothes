import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product } from 'src/app/models/product.model';
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
  offset = 0;
  limit = 10;
  constructor(
    private storeService: StoreService, 
    private productsService: ProductsService
  ){
    this.myshoppingCart = this.storeService.getMyShoppingCart();
  }
  ngOnInit(): void {
    this.loadMore();
    
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
  createProduct(){
    const newProduct: CreateProductDTO ={
      images : ['https://placeimg.com/640/480/any?r=0.4686298051618787'],
      price : 125,
      title: "Wo ho ho ho",
      description: "esto es una prueba",
      categoryId: 3,
    }
    this.productsService.create(newProduct).subscribe(data =>{
      console.log(data)
    })
  }
  loadMore(){
    this.productsService.getProductsByPage(this.offset, this.limit).subscribe(data =>{
      this.products.push(...data);
    })
    this.offset += this.limit;
  }
}
