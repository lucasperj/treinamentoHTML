function somarValores(){
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    let valor = 0;
    if (s1 == 1) {
        valor = Number(4);
        s1 = 'Cachorro-Quente';   
    } else if (s1 == 2) {
        valor = Number(4.50);
        s1 = 'X-Salada';
    } else if (s1 == 3) {
        valor = Number(5);
        s1 = 'X-Bacon';

    } else if (s1 == 4){
        valor = Number(2);
        s1 = 'Torrada simples';

    } else {
        valor = Number(1.50);
        s1 = 'Refrigerante';
    }       
    let s3 = Number(valor)*Number(s2);
    resultado.innerHTML = `O valor a ser pago pelos ${s1} pedidos é: R$${s3},00.`;

}

