import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imagen = "https://www.w3schools.com/howto/img_avatar.png"
  cargaImg(imgLink :string){
    console.log("el padre sabe que cargo la imagen:",imgLink)
  }
}
