import { Component, OnInit } from '@angular/core';
import { PilotosService } from '../services/pilotos.service';

@Component({
  selector: 'app-lista-pilotos',
  templateUrl: './lista-pilotos.component.html',
  styleUrls: ['./lista-pilotos.component.css']
})
export class ListaPilotosComponent implements OnInit {

  pilotos = [];
  mostrarPilotos:boolean = false;
  operacion:string = 'Mostrar';

  constructor(private pilotosSrv:PilotosService) { }

  ngOnInit() {
    this.pilotos = this.pilotosSrv.obtenerPilotos();
  }

  verPilotos() {
    this.operacion = this.operacion === 'Ocultar' ? 'Mostrar' : 'Ocultar';
    this.mostrarPilotos = !this.mostrarPilotos;
  }

}
