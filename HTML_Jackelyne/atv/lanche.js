function calcular() {
    var pedido = document.getElementById('lch').value;

    var quantidade = document.getElementById('qnt').value;

    let valor = 0

    if (pedido == 1){
        valor = parseFloat(4)

    
    } else if (pedido==2){
        valor = parseFloat(4.50)
    
    } else if (pedido==3) {
        valor = parseFloat(5)
       
    
    } else if (pedido==4) {
        valor = parseFloat(2)

    
    } else {
        valor = parseFloat(1.50)
        
    }

    let total = parseFloat(valor)*parseInt(quantidade)
    Resultado.innerHTML= `Valor Total do seu pedido: ${total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}. `;

} 

