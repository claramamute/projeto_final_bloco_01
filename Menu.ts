import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { Instrumento } from "./src/model/Instrumento";
import { Acessorio } from "./src/model/Acessorio";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main(){

   
    let opcao, id, tipo, preco: number ;
    let nome, categoria, marca: string; 

    const tipoProdutos = ['Instrumento', 'Acessorio']

    //Instânciando ( criando objeto) Classe Controller
    const produtos: ProdutoController = new ProdutoController()

//Teste da aplicação
    // produtos.cadastrarProduto(new Instrumento(produtos.gerarId(),'Guitarra', 1 , 600.00, 'cordas'))
    // produtos.cadastrarProduto(new Instrumento(produtos.gerarId(),'Bateria', 1 , 2000.00, 'percussão'))
    
    // // Novas Instâncias da Classe Poupança (Objetos)
    // produtos.cadastrarProduto(new Acessorio(produtos.gerarId(), 'Capotraste', 2, 20.00, 'Unlop'));
    // produtos.cadastrarProduto(new Acessorio(produtos.gerarId(), ' Palheta', 2, 5.00, 'Alice'));

    while(true){
        console.log(colors.reset)
        console.log(colors.fg.magentastrong)
        console.log("**********************************************************");
        console.log("                                                          ");
        console.log("                       CASA DA MÚSICA                     ");
        console.log("                                                          ");
        console.log("**********************************************************");        
        console.log('                                                          ');
        console.log('                1- Cadastrar Produto                      ');
        console.log('                2- Listar todos Produtos                  ');
        console.log('                3- Buscar produto por id                  ');
        console.log('                4- Atualizar Produto                      ');
        console.log('                5- Apagar Produto                         ');
        console.log('                6- Sair                                   ');
        console.log('                                                          ');
        console.log('**********************************************************');
        console.log('                                                          ');
        

        console.log('Entre com a opção desejada: ');
        opcao = readlinesync.questionInt('');

        if(opcao === 6){
            console.log('\n Casa da música - a vida é uma melodia')
            sobre()
            process.exit(0)

        }
        console.log(colors.fg.whitestrong)

        switch(opcao){
            case 1:
                console.log("\n\nCadastrar Produto\n\n")

                console.log("Digite o Nome do Produto: ")
                nome = readlinesync.question("")

                console.log("Digite o Tipo do Produto: ")
                tipo = readlinesync.keyInSelect(tipoProdutos, "", {cancel: false}) + 1 

                console.log("Digite o Preço do Produto: ")
                preco = readlinesync.questionFloat("")

                switch(tipo){
                    case 1:
                        console.log("Digite a categoria: ")
                        categoria = readlinesync.question("")

                        produtos.cadastrarProduto(new Instrumento(produtos.gerarId(), nome, tipo, preco, categoria)) 

                        break
                    case 2:
                        console.log("Digite a marca: ")
                        marca = readlinesync.question("")

                        produtos.cadastrarProduto( new Acessorio(produtos.gerarId(), nome, tipo, preco, marca))

                        break

                }
                keyPress()
                break
            case 2: 
                console.log("\n\nListar todos Produtos\n\n")

                produtos.listarProdutos()

                keyPress()                
                break
            case 3:
                console.log("\n\nBuscar produto por ID\n\n")

                console.log("Digite o ID: ")
                id = readlinesync.questionInt("")

                produtos.consultarPorId(id)

                keyPress()
                break
            case 4:
                console.log("\n\nAtualizar Produto\n\n")

                console.log("Digite o ID do Produto: ")
                id = readlinesync.questionInt("")

                let produto = produtos.buscarArray(id);

                if(produto !== null){
                    console.log("Digite o Nome do Produto: ")
                    nome = readlinesync.question("")
                    
                    tipo = produto.tipo;
    
                    console.log("Digite o Preço do Produto: ")
                    preco = readlinesync.questionFloat("")

                    switch(tipo){
                        case 1:
                            console.log("Digite a categoria: ")
                            categoria = readlinesync.question("")
    
                            produtos.atualizarProduto(new Instrumento(id, nome, tipo, preco, categoria)) 
    
                            break
                        case 2:
                            console.log("Digite a marca: ")
                            marca = readlinesync.question("")
    
                            produtos.atualizarProduto( new Acessorio(id, nome, tipo, preco, marca))
    
                            break
    
                    }
                } else{
                    console.log(colors.fg.redstrong)
                    console.log("\n O produto não foi encontrado")
                    console.log(colors.reset)
                }

                keyPress()
                break
            case 5:
                console.log("\n\nApagar Produto\n\n")

                console.log("Digite o ID do Produto que será deletado: ")
                id = readlinesync.questionInt("")

                produtos.deletarProduto(id)

                keyPress()
                break

            default:
                console.log(colors.fg.red)
                console.log("\n\nOpção Inválida!\n\n")
                console.log(colors.reset)
                keyPress()
        }


    }
}

export function sobre(): void{
    console.log(colors.bg.black, colors.fg.magentastrong)
    console.log('\n ************************************************')
    console.log('\nProjeto desenvolvido por: Clara Araujo')
    console.log('\nGeneration Brasil - clara.paula@genstudents.org')
    console.log('\ngithub.com/claramamute')
    console.log('\n ************************************************\n')
    console.log(colors.reset)

}

function keyPress(): void{
    console.log(colors.fg.magentastrong)
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main()