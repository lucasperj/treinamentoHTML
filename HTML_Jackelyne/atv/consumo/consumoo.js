function calcular(){
    var km = document.getElementById('km').value
    var combustivel = document.getElementById('combustivel').value

    var result = parseInt(km)/parseFloat(combustivel)
    res.innerHTML = `${result.toFixed(3)} km/l`
}