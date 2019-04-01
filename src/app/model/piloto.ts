export class Piloto {

    //atributos
    private _nombre:string;
    private _apellido:string;
    private _escuderia:string;
    private _avatar:string;

    //propiedades
    get nombre():string {
        return this._nombre;
    }

    get apellido():string {
        return this._apellido;
    }

    get escuderia():string {
        return this._escuderia;
    }

    get avatar():string {
        return this._avatar;
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

    set escuderia(value:string) {
        this._escuderia = value;
    }

    set avatar(value:string) {
        this._avatar = value;
    }

    //métodos
    constructor(nombre:string, apellido:string, escuderia:string, avatar:string) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._escuderia = escuderia;
        this._avatar = avatar;
    }

}
