import { Injectable } from '@angular/core';
import { Piloto } from '../model/piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  pilotos = [];

  constructor() { 
    this.pilotos.push(new Piloto('Airton', 'Senna', 'McLaren', 'airton-senna.jpg'));
    this.pilotos.push(new Piloto('Michael', 'Schumacher', 'Ferrari', 'michael-schumacher.jpg'));
    this.pilotos.push(new Piloto('Fernando', 'Alonso', 'Renault', 'fernando-alonso.jpg'));
  }

  obtenerPilotos() {
    return this.pilotos;
  }

}
