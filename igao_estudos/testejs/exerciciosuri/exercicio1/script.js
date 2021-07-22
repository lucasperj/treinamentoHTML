
let cod1 = prompt('Digite o codigo do produto: ');
let valor = parseFloat(0);
    if (cod1 == 1) {
        valor = parseFloat(4);
        cod1 = 'Cachorro-Quente';   
    } else if (cod1 == 2) {
        valor = parseFloat(4.50);
        cod1 = 'X-Salada';
    } else if (cod1 == 3) {
        valor = parseFloat(5);
        cod1 = 'X-Bacon';

    } else if (cod1 == 4){
        valor = parseFloat(2);
        cod1 = 'Torrada simples';

    } else {
        valor = parseFloat(1.50);
        cod1 = 'Refrigerante';
    }

let quantidade = Number(window.prompt(`Voce escolheu ${cod1}. Digite a quantidade: `));

let total = valor * quantidade
const resultado = alert(`O total de ${cod1} a ser pago, foi: ${total}`);



    

