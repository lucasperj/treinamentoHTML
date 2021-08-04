  function media() {
    var n1 = parseFloat(document.getElementById("nota1").value)
    var n2 = parseFloat(document.getElementById("nota2").value)
    var n3 = parseFloat(document.getElementById("nota3").value)
    var n4 = parseFloat(document.getElementById("nota4").value)

    n1 = n1*2
    n2 = n2*3 
    n3 = n3*4    
    n4 = n4*1    

    var media = parseFloat((n1+n2+n3+n4)/10)
    var situacao = ""
    if (media <= 5){
        situacao = " Aluno reprovado"
    }
    else if (media <= 6.9){
        situacao = " Aluno em recuperacao final"

    }
    else{
        situacao = "Aluno aprovado"
    }
    resultado.innerHTML = `A media do aluno ${media} ${situacao}`
}
function mFinal() {
    var n1 = parseFloat(document.getElementById("nota1").value)
    var n2 = parseFloat(document.getElementById("nota2").value)
    var n3 = parseFloat(document.getElementById("nota3").value)
    var n4 = parseFloat(document.getElementById("nota4").value)
    var nE = parseFloat(document.getElementById("notaE").value)
    n1 = n1*2
    n2 = n2*3 
    n3 = n3*4    
    n4 = n4*1    

    var media = parseFloat((n1+n2+n3+n4)/10)
    var situacao = ""
    var mediaf = (nE + media)/2

    if (mediaf >= 5) {
        situacao = "Aluno aprovado"
    }
    else{
        situacao = "Aluno reprovado"
    }
    resultado1.innerHTML = `A media do aluno ${mediaf} ${situacao}`

}

