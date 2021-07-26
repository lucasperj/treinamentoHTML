function lanche () {
    const x = document.getElementById("codd").value
    const y = document.getElementById("quant").value
    // 
    var c1 = 4.00
    var s1 = 4.50
    var b1 = 5.00
    var t1 = 2.00
    var r1 = 1.50

    let total = 0

    if (x == 1){
        total = parseFloat(c1)
    }
    else if (x == 2){
        total = parseFloat(s1)
    }
    else if (x == 3){
        total = parseFloat(b1)
    }
    else if (x == 4){
        total = parseFloat(t1)
    }
    else if (x == 5){
        total = parseFloat(r1)
    }
    var res = parseFloat(total)*parseInt(y)
    resposta1.innerHTML =`o valor do seu pedido ${res.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
}