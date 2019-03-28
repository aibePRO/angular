import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // usuario:Usuario[];
  usuario:Usuario;

  constructor() { 
    this.usuario = new Usuario('Aitor', 'Bertorelli', 'admin', 'admin');
  }

  autenticacionUsuario(user:Usuario):Promise<boolean> {
    let promise = new Promise<boolean>((resolve, reject) => {
      try {        
        resolve(this.compruebaUsuario(user));
      } catch (error) {
        reject(error);
      }
    });
    return promise;
  }

  login = (l:any) => {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.compruebaUsuario(l));
    });
  }

  compruebaUsuario(user:Usuario):boolean {
    return (this.usuario.username === user.username 
      && this.usuario.password === user.password) ? true : false;
  }

  loginStorage(l:any) {
    if (l.password === this.usuario.password) {
      localStorage.setItem('usuario_loagado', JSON.stringify(true));
    } else {
      localStorage.setItem('usuario_loagado', JSON.stringify(false));
    }
  }

  // localStorage.setItem('usuario_logado', JSON.stringify(l === this.usuario.password));

}
