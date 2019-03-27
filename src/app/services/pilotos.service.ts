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

/*   obtenerPilotos() {
    return this.pilotos;
  }
 */
  // Simulando origen de datos
/*   obtenerPilotosAsync(callback) {
    setTimeout(() => {
      callback([...this.pilotos]); //spread notation
    }, 100);
  }
 */

  //CRUD
  //Lectura
  obtenerPilotos():Promise<Piloto[]> {
    let promesa = new Promise<Piloto[]>((resolve, reject) => {
      try {
        resolve([...this.pilotos])
      } catch(error) {
        reject(error);
      }
    });
    return promesa;
  }
  //Borrado
  borrarPiloto = (id:number) => {
    this.pilotos.splice(id, 1);
  }
  //Alta
  addPiloto(nuevoPiloto:Piloto) {
    this.pilotos = [...this.pilotos, nuevoPiloto];
    // this.pilotos.push(nuevoPiloto); // Forma clásica, no inmutable.
  }

}
