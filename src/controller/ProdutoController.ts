

import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto> // Collection criada

    public id: number = 0; 

    cadastrarProduto(produto: Produto): void { 
        this.listaProdutos.push(produto); 
        console.log(colors.fg.greenstrong)

        console.log("\nProduto Cadastrado com Sucesso!")
        console.log(colors.reset)
    }

    listarProdutos(): void {
        for(let produto of this.listaProdutos){ 
            produto.visualizar() 
        }

    }

    consultarPorId(id: number): void {
        let buscaProduto = this.buscarArray(id)

        if(buscaProduto !== null){
            buscaProduto.visualizar() 

        }else{
            console.log(colors.fg.redstrong)
            console.log("\n Produto não encontrado!")
            console.log(colors.reset)
        }
    }

    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarArray(produto.id)

        if(buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto; 

            console.log(colors.fg.greenstrong)
            console.log("\nO produto foi atualizado com sucesso!")
            console.log(colors.reset)

        } else{
            console.log(colors.fg.redstrong)
            console.log("\n O produto não foi encontrado")
            console.log(colors.reset)

        }
    }

    deletarProduto(id: number): void {
   
        const index = this.listaProdutos.findIndex(produto => produto.id === id); 

        if (index !== -1) { 
            this.listaProdutos.splice(index, 1);
            console.log(colors.fg.greenstrong)
            console.log(`\nProduto deletado com sucesso!`);
            console.log(colors.reset)
        } else {
            console.log(colors.fg.redstrong)
            console.log(`\nProduto não encontrado!`);
            console.log(colors.reset)
        }
    }



    public gerarId(): number{
        return ++ this.id
    }

    public buscarArray(id: number): Produto | null{ 
        for(let produto of this.listaProdutos){
            if(produto.id === id){
                return produto;
            }
        }
        return null;
    }

}