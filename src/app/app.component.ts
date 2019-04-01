import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ListaPilotosComponent } from './lista-pilotos/lista-pilotos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  private _title = 'Bienvenido a esta App';
  private _subtitle = 'Cuarta sesión Angular';
  private _logoFormula = 'https://www.autofacil.es/elementosWeb/gestionCajas/AUF/Image/ferrari_car.png';
  usuarioLogado: boolean = false;
  errorMsg: string = '';


  @ViewChild(ListaPilotosComponent)
  lista:any;

  get title(): string {
    return this._title;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  get logoFormula(): string {
    return this._logoFormula;
  }

  //métodos
  ngOnInit() { }

  ngOnDestroy() {
    console.log('Este componente se ha destruído...');
  }

  nuevoItem() {
    this.lista.ngOnInit();
  }

  //Usando el LocalStorage
  comprobarUsuario() {
    this.usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));
    console.log(this.usuarioLogado);
    this.errorMsg = this.usuarioLogado ? '' : 'Error Username/Password';
  }


}
