import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ListaPilotosComponent } from './lista-pilotos/lista-pilotos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  private _title = 'Bienvenido a esta App';
  private _subtitle = 'Tercera sesión Angular';
  private _logoFormula = 'https://www.autofacil.es/elementosWeb/gestionCajas/AUF/Image/ferrari_car.png';
  
  @ViewChild(ListaPilotosComponent)
  lista;

  get title():string {
    return this._title;
  }

  get subtitle():string {
    return this._subtitle;
  }

  get logoFormula():string {
    return this._logoFormula;
  }

  //métodos
  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Este componente se ha destruído...');
  }

  nuevoItem() {
    this.lista.ngOnInit();
  }

}
