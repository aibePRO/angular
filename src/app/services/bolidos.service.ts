import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()

export class BolidosService {

  bolidos:Array<string> = ['bolido 1', 'bolido 2', 'bolido 3'];

  constructor() { }

  obtenerBolidos():Observable<string[]> {
    return of(this.bolidos);
  }
}
