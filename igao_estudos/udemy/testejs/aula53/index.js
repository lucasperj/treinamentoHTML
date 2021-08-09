// Closures

function retornaFuncao() {
    const nome = 'Luiz';
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao();
// console.dir(funcao)        // Essa funcao tem 3 escopos, A da mae dela, o dela propria e o global.