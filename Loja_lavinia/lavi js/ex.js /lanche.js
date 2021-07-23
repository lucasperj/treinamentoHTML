var c = 1
var s = 2
var b = 3
var t = 4
var r = 5


var c1 = 4
var s1 = 4.50
var b1 = 5
var t1 = 2
var r1 = 1.50



function calcular() {
    var lanche = document.getElementById('lnc').value
    var quantidade = document.getElementById('quan').value

    let valor = 0

    if(lanche == 1){
        valor = parseFloat(4)
    }
    else if(lanche == 2){
        valor = parseFloat(4.50)
    }
        
    else if(lanche == 3){
        valor = parseFloat(5)
    }
    else if(lanche == 4){
        valor = parseFloat(2)
    }
    else if(lanche == 5){
        valor = parseFloat(1.50)
    }
    else{

    }
    var total = Number(valor)*Number(quantidade)
    resp.innerHTML = `O Total e R$` + total
    
}