// codigo do lanche
var l1 = 1
var l2 = 2
var l3 = 3
var l4 = 4
var l5 = 5

//valores
var v1 = 4
var v2 = 4.50
var v3 = 5
var v4 = 2
var v5 = 1.50

function calcular(pedido, quantidade) {

    var pedido = document.getElementById('lch')

    var quantidade = document.getElementById('qnt')

    var valor = parseFloat(0);

    if (pedido==l1){
        valor = valor + v1*quantidade
        return valor

    }
    else if (pedido==l2){
        valor = valor + v2*quantidade 
        return valor
    }
    else if (pedido==l3) {
        valor = valor + v3*quantidade
        return valor
    }
    else if (pedido==l4) {
        valor = valor + v4*quantidade
        return valor

    }
    else if (pedido==l5) {
        valor = valor + v5*quantidade
        return valor
        
    }

    var total = valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    resultado.innerHTML= `Total: ${total}`
} 

