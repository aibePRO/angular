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

  async ngOnInit() {
    //síncrona
    // this.pilotos = this.pilotosSrv.obtenerPilotos();
    //asíncrona
    // this.pilotosSrv.obtenerPilotosAsync((data:any) => {
    //   this.pilotos = data;
    // });
    /* this.pilotosSrv.obtenerPilotos()
      .then(data => {
        this.pilotos = data;
      })
      .catch(error => {
        console.log(`Ha habido un error ${error}`);
      }); */

      try {
        this.pilotos = await this.pilotosSrv.obtenerPilotos();
      } catch(error) {
        console.log(`Ha habido un error ${error}`);
      }
  }

  verPilotos() {
    this.operacion = this.operacion === 'Ocultar' ? 'Mostrar' : 'Ocultar';
    this.mostrarPilotos = !this.mostrarPilotos;
  }

  borrarItem(id:number) {
    this.pilotosSrv.borrarPiloto(id - 1);
    this.ngOnInit();
  }

}
