import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Piloto } from '../model/piloto';

@Component({
  selector: 'tr[app-piloto]',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit {

  @Input()
  data:Piloto;

  @Input()
  indice:Piloto;

  @Output()
  itemBorrado:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getAvatar = (nombreImagen:string) => {
    return `assets/images/${nombreImagen}`;
  }

  borrarItem(id:number) {
    this.itemBorrado.emit(id);
  }
}
