function calcular(){
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var n3 = document.getElementById('n3').value
    var n4 = document.getElementById('n4').value

    n1= n1*2
    n2= n2*3
    n3= n3*4
    n4= n4*1

    var situ = '';

    var media= parseFloat((n1+n2+n3+n4)/10)
    console.log(media);
    if (media< 5){
        situ = 'ALUNO REPROVADO!'
     
    }else if (media >= 7){
        situ = 'ALUNO APROVADO'
     
    }else if (5<=media<=6.9) {
       situ= 'ALUNO EM EXAME!'

    }else {
        return erro
    }    
    resultado.innerHTML= `<p>Sua media final foi ${media} - Situacao: ${situ}</p>`

    
}
function final(){
    var nota_exame = parseFloat(document.getElementById('notae').value);

    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;

    n1= n1*2
    n2= n2*3
    n3= n3*4
    n4= n4*1

    var situ = '';

    var media= parseFloat((n1+n2+n3+n4)/10)
    console.log(media);
    console.log(typeof nota_exame);
    var media2=0
    media2 = parseFloat(nota_exame+media)
    console.log(media2);
    media2= media2/2
    console.log(media2);

    // var final1 = (nota_exame+media)/2

    if (media2 >=5){
        situ= 'ALUNO APROVADO'
    }
    else {
        situ = 'ALUNO REPROVADO'
    }

    mediae.innerHTML= `<p>Sua media final foi ${media2} - Situacao: ${situ}</p>`
}
