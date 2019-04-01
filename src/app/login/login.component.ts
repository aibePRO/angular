import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  usuario:Usuario;

  /* login:any = {
    username: '',
    password: ''
  } */

  @Output()
  // No localStorage
  // comprobarUsuario: EventEmitter<boolean> = new EventEmitter();
  // localStorage
  comprobarUsuario: EventEmitter<void> = new EventEmitter();

  constructor(private loginSrv:LoginService) { }

  ngOnInit() {
    this.usuario = new Usuario('','','','');
  }

  autenticarUsuario(){
    console.log(`Datos Formulario:
      ${this.usuario.username},
      ${this.usuario.password}`);
    try {
    // No localStorage
    //   this.loginSrv.autenticacionUsuario(
    //     new Usuario(
    //       this.usuario.nombre,
    //       this.usuario.apellido,
    //       this.usuario.password,
    //       this.usuario.username))
    //     .then(response => {
    //       this.comprobarUsuario.emit(response);
    // }).catch(error => {
    //   throw error;
    // });
    // Por localStorage
      this.loginSrv.loginStorage(new Usuario(
        this.usuario.nombre,
        this.usuario.apellido,
        this.usuario.password,
        this.usuario.username));
      this.comprobarUsuario.emit();
    } catch (error) {
      console.log('Ha habido un error en el Autenticación...');
    }
    return false;
  }

}
