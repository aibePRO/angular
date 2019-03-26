export class Piloto {

    //atributos
    private _nombre:string;
    private _apellido:string;
    private _escuderia:string;
    private _portrait:string;

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

    get portrait():string {
        return this._portrait;
    }

    get nombreCompleto():string {
        return `${this._nombre} ${this._apellido}`;
    }

    //métodos
    constructor(nombre:string, apellido:string, escuderia:string, portrait:string) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._escuderia = escuderia;
        this._portrait = portrait;

    }
    
}