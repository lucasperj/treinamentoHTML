
//}
function test(){
    var input1 = parseFloat(document.getElementById("nota1").value)
    var input2 = parseFloat(document.getElementById("nota2").value)
    var input3 = parseFloat(document.getElementById("nota3").value)
    var input4 =parseFloat(document.getElementById("nota4").value)

    input1 = input1*2
    input2 = input2*3 
    input3 = input3*4    
    input4 = input4*1    

    var media = parseFloat((input1+input2+input3+input4)/10)
    var resultt = ""
    if (media <= 5){
        resultt = " reprovado"
    }
    else if (media <= 6.9){
        resultt = " Recuperacao"

    }
    else{
        resultt = "Aprovado"
    }
    resultado.innerHTML = `A media do aluno ${media} ${resultt}`
}

function test1(){
    var input1 = parseFloat(document.getElementById("nota1").value)
    var input2 = parseFloat(document.getElementById("nota2").value)
    var input3 = parseFloat(document.getElementById("nota3").value)
    var input4 =parseFloat(document.getElementById("nota4").value)
    var input5 = parseFloat(document.getElementById("Exame1").value)
    input1 = input1*2
    input2 = input2*3 
    input3 = input3*4    
    input4 = input4*1    
    var resultt = ""
    var media = parseFloat((input1+input2+input3+input4)/10)
    
    var media1 = (input5 + media)/2

    if (media1 >= 5) {
        resultt = "Aprovado"
    }
    else{
        resultt = "Reprovado"
    }
    resultado1.innerHTML = `A media do aluno ${media1} ${resultt}`

}