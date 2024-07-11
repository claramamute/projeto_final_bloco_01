import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { Instrumento } from "./src/model/Instrumento";
import { Acessorio } from "./src/model/Acessorio";

export function main(){

   
    let opcao: number ;

    // Testes da aplicação
    //Novas Instâncias da Classe Instrumento (Objetos)
    const p1: Instrumento = new Instrumento(1,'Guitarra', 1 , 600.00, 'cordas');
    const p2: Instrumento = new Instrumento(1,'Bateria', 1 , 2000.00, 'percussão');

    p1.visualizar();
    p2.visualizar();


    // Objeto da Classe Acessorio (teste)
    const a1: Acessorio = new Acessorio(1,'Capotraste', 2 , 20.00, 'Dunlop');
    const a2: Acessorio = new Acessorio(1,'Palheta', 2 , 5.00, 'Alice');

    a1.visualizar()
    a2.visualizar()

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

                keyPress()
                break
            case 2: 
                console.log("\n\nListar todos Produtos\n\n")

                keyPress()                
                break
            case 3:
                console.log("\n\nBuscar produto por ID\n\n")
                keyPress()
                break
            case 4:
                console.log("\n\nAtualizar Produto\n\n")

                keyPress()
                break
            case 5:
                console.log("\n\nApagar Produto\n\n")

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