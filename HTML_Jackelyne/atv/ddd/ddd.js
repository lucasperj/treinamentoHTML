
function pesquisar(){

    var ddd = document.getElementById('n').value
    let cidade = '';

    if (ddd=="71"){
        cidade = "Salvador"
    }else if (ddd=="11"){
        cidade = "Sao Paulo"
    }else if (ddd=="21"){
        cidade = "Salvador"
    }else if (ddd=="32"){
        cidade = "Juiz de Fora"
    }else if (ddd=="19"){
        cidade = "Campinas"
    }else if (ddd=="27"){
        cidade = "Vitoria"
    }else if(ddd=="31"){
        cidade = "Belo Horizonte"
    }else if (ddd=="61"){
        cidade = "Brasilia"
    }else {
        cidade = "DDD NAO CADASTRADO"
    }
    
    let cdd = cidade
    res.innerHTML =`${cdd}` 

}