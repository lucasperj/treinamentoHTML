const form= document.querySelector('.form')

form.addEventListener('submit',function(evento){
    evento.preventDefault();
    total();
})
function total (msg){
    var total = Math.round((peso.value/altura.value**2)*10000)
    const resultado=document.querySelector('#resultado')
    resultado.innerHTML= `O total eh: ${total}`
}