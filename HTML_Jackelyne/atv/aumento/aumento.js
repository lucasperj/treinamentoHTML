function calcular(){
    var sal = document.getElementById('sal').value
    var porc = ' ';
    let por = 0

    if (sal <= 400.00){
        porc = '15%'
        por = parseFloat(sal*15/100)

    } else if ( sal <= 800.00){
        porc = '12%'
        por = parseFloat(sal*12/100)

    } else if (sal <= 1200.00){
        porc = '10%'
        por = parseFloat(sal*10/100)

    } else if (sal <= 2000.00){
        porc = '7%'
        por = parseFloat(sal*7/100)

    } else {
        porc = '4%'
        por = parseFloat(sal*4/100)

    }


    var novosalario = parseFloat(sal)+parseFloat(por)
    var reajuste = parseFloat(novosalario)-parseFloat(sal)
    res.innerHTML = `Novo Salario: ${novosalario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
    res2.innerHTML = `Reajuste ganho: ${reajuste.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
    res3.innerHTML = `Em percentual: ${porc}`
}