import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  private _title = 'Bienvenido a esta App';
  private _subtitle = 'Segunda sesión Angular';
  private _logoFormula = 'http://aibe.pro/img/aitor_i_bertorelli_e.png';
  
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

}
