import { Produto } from "./Produto";


export class Instrumento extends Produto{ //Herança

    private _categoria: string; // categoria do instrumento. ex: percussão, sopro,cordas, teclado

    constructor(id: number, nome:string, tipo: number, preco: number, categoria: string){
        super(id, nome, tipo, preco)
        this._categoria = categoria
    }

	public get categoria(): string {
		return this._categoria;
	}

	public set categoria(value: string) {
		this._categoria = value;
	}

    public visualizar(): void { //Polimorfismo
        super.visualizar() 
        console.log(`Categoria:  ${this._categoria}`)
    }

}