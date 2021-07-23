    //Laches codigos deles
    var c = 1
    var s = 2
    var b = 3
    var t = 4
    var r = 5

    //valor dos lanches
    var c1 = 4.00
    var s1 = 4.50
    var b1 = 5.00
    var t1 = 2.00
    var r1 = 1.50

function lachinhos(){

    let valor = 0
   

    var input1 = document.getElementById('number1').value
    var input2 = document.getElementById('number2').value

    if (input1 == 1){
        valor = parseFloat(4)
    }
    else if (input1 == 2){
        valor = parseFloat(4.50)

    }
    else if (input1 == 3){
        valor = parseFloat(5)

    }
    else if (input1 == 4){
        valor = parseFloat(2)

    }
    else if(input1 == 5){
        valor = parseFloat(1.50)
    }
    
    var total = parseFloat(valor)*parseInt(input2)

    resposta.innerHTML = `O Total vai ser ${total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`

}
