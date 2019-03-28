export class Usuario {

    //atributos
    private _nombre:string;
    private _apellido:string;
    private _username:string;
    private _password:string;

    //propiedades
    get nombre():string {
        return this._nombre;
    }
    
    get apellido():string {
        return this._apellido;
    }
    
    get username():string {
        return this._username;
    }

    get password():string {
        return this._password;
    }

    get nombreCompleto():string {
        return `${this._nombre} ${this._apellido}`;
    }

    set nombre(value:string) {
        this._nombre = value;
    }

    set apellido(value:string) {
        this._apellido = value;
    }

    set username(value:string) {
        this._username = value;
    }

    set password(value:string) {
        this._password = value;
    }

    //métodos
    constructor(nombre:string, apellido:string, username:string, password:string) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._username = username;
        this._password = password;
    }
    
}