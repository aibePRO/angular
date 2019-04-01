import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // usuario:Usuario[];
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario('Aitor', 'Bertorelli', 'admin', 'admin');
  }

  autenticacionUsuario(user:Usuario): Promise<boolean> {
    let promise = new Promise<boolean>((resolve, reject) => {
      try {
        resolve(this.compruebaUsuario(user));
      } catch (error) {
        reject(error);
      }
    });
    return promise;
  }

  compruebaUsuario(user: Usuario): boolean {
    if (user.username == '' &&  user.password == '') return true;
    return (this.usuario.username === user.username
      && this.usuario.password === user.password);
  }

  // Usando localStorage se cambia el método autenticacionUsuario por login
  loginStorage(user: Usuario): any {
    // Esto
    // if (l.password === this.usuario.password) {
    //   localStorage.setItem('usuario_logado', JSON.stringify(true));
    // } else {
    //   localStorage.setItem('usuario_logado', JSON.stringify(false));
    // }
    // Pero mejor simplificado
    localStorage.setItem('usuario_logado', JSON.stringify(this.compruebaUsuario(user)));
  }

  login = (user: Usuario) => {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.loginStorage(user));
    });
  }

  //

}
