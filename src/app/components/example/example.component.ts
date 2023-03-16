import { Component, Input ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  @Input() 
  img: string = "";
  imgError(){
    this.img = "https://www.w3schools.com/howto/img_avatar2.png"
  }

  @Output() 
  carga = new EventEmitter <string>();
  imgLoaded(){
    console.log("el hijo sabe que cargo la imagen")
    this.carga.emit(this.img)//emitiendo al padre
  }
}
