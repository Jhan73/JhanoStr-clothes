import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  defaulImg = "https://www.m2crowd.com/core/i/placeholder.png";
  @Input()
  img = "";
  @Output()
  dataLoad = new EventEmitter<string>();
  imgLoaded(){
    this.dataLoad.emit(this.img);
  }

  imgError(){
    this.img = this.defaulImg;
  }

}
