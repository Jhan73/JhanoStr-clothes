import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductDTO, Product } from '../models/product.model';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = `${environment.API_URL}/api/products`;
  constructor(private http : HttpClient) {

  }
  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl)
  }
  getProductById(id: string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
  create(dto: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, dto);
  }
  getProductsByPage(offset: number, limit: number){
    return this.http.get<Product[]>(this.apiUrl,{
      params: {limit, offset}
    } )
  }
}
