import { Produto } from "./Produto";

export class Acessorio extends Produto{ //Herança

    private _marca: string; // Marca do acessorio, ex: capotraste da 

    constructor(id: number, nome:string, tipo: number, preco: number, marca: string){
        super(id, nome, tipo, preco)
        this._marca = marca
    }

	public get marca(): string {
		return this._marca;
	}

	public set marca(value: string) {
		this._marca = value;
	}

    public visualizar(): void { //Polimorfismo
        super.visualizar() 
        console.log(`Marca do acessório: ${this._marca}`)
    }

}