// // codigo do lanche
// var l1 = 1
// var l2 = 2
// var l3 = 3
// var l4 = 4
// var l5 = 5

// //valores
// var v1 = 4
// var v2 = 4.50
// var v3 = 5
// var v4 = 2
// var v5 = 1.50


function calcular() {

    var pedido = document.getElementById('lch')

    var quantidade = document.getElementById('qnt')

    var valor = Number(0);

    if (pedido == 1){
        valor = Number(4);
    }
    else if (pedido== 2){
        valor = Number(4.50);
    }
    else if (pedido== 3) {
        valor = Number(5);
    }
    else if (pedido== 4) {
        valor = Number(2);
    }
    else if (pedido== 5) {
        valor = Number(1.50);
    }

    let total;
    total = valor * quantidade
    resultado.innerHTML= `Total: ${total}`
}
