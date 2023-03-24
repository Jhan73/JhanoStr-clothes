import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';

import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ImageComponent } from './components/image/image.component';
import { NavComponent } from './components/nav/nav.component';

import {HttpClientModule} from '@angular/common/http';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ProductComponent,
    ProductsComponent,
    ImageComponent,
    NavComponent,
    TimeAgoPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
