import { Component, OnInit, Input } from '@angular/core';
import { Piloto } from '../model/piloto';

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit {

  @Input()
  data:Piloto;

  @Input()
  indice:Piloto;

  constructor() { }

  ngOnInit() {
  }

  getAvatar = (nombreImagen:string) => {
    return `assets/images/${nombreImagen}`;
  }

}
