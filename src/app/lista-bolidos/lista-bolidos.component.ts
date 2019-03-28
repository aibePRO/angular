import { Component, OnInit } from '@angular/core';
import { BolidosService } from '../services/bolidos.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-bolidos',
  templateUrl: './lista-bolidos.component.html',
  styleUrls: ['./lista-bolidos.component.css'],
  providers:[BolidosService]
})
export class ListaBolidosComponent implements OnInit {
  
  bolidos: string[];
  bolidos$:Observable<string[]>;
  subscripcion:Subscription;

  constructor(private bolidosSrv:BolidosService) { }

  ngOnInit() {
    //petición de bólidos
    /* this.subscripcion = this.bolidosSrv.obtenerBolidos()
      .subscribe(data => {
        this.bolidos = data;
      }); */
    //alternativa -> asignación directa.
    this.bolidos$ = this.bolidosSrv.obtenerBolidos();
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

}
