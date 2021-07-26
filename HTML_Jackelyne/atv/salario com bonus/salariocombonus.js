function calcular(){
    var salario = document.getElementById('sal').value
    var vendas = document.getElementById('ven').value

    let comissao = parseFloat(vendas * 15/100)

    let total = (parseFloat(salario) + parseInt(comissao))
    result.innerHTML = `TOTAL: ${total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`

}