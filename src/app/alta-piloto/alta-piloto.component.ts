import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Piloto } from '../model/piloto';
import { PilotosService } from '../services/pilotos.service';

@Component({
  selector: 'app-alta-piloto',
  templateUrl: './alta-piloto.component.html',
  styleUrls: ['./alta-piloto.component.css']
})
export class AltaPilotoComponent implements OnInit {

  piloto:Piloto;

  @Output()
  addedPiloto:EventEmitter<void> = new EventEmitter();

  constructor(private pilotosSrv:PilotosService) { }

  ngOnInit() {
    this.piloto = new Piloto('', '', '', '');
  }

  addPiloto() {
    console.log(`${this.piloto.nombre} ${this.piloto.apellido} - ${this.piloto.escuderia} - ${this.piloto.avatar}`);
    try {
      this.pilotosSrv.addPiloto(new Piloto(
        this.piloto.nombre,
        this.piloto.apellido,
        this.piloto.escuderia,
        this.piloto.avatar
      ));
      this.addedPiloto.emit();
    } catch(error) {
      console.log('Ha habido un error de carga...');
    }
    return false;
  }

}
