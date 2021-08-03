function escopo(){

    const form = form.querySelector('.form');
    const resultado = resultado.querySelector('.resultado');
    const resultado2 = resultado2.querySelector('.resultado2');

    const notas = [];

    function click1 (evento) {
        evento.preventDefault();
        const nota1 = form.querySelector('.nota1');
        const nota2 = form.querySelector('.nota2');
        const nota3 = form.querySelector('.nota3');
        const nota4 = form.querySelector('.nota4');
        const aluno = form.querySelector('.nome');

        notas.push({

            nota1: nota1.value,
            nota2: nota2.value,
            nota3: nota3.value,
            nota4: nota4.value
        }); 

        var media = Number((nota1*2)+(nota2*3)+(nota3*4)+(nota4*1)/10)
        let resultadomedia = '';
        if (media >= 7){
            resultadomedia = 'Aluno aprovado';
        } else if (media< 5){
            resultadomedia = 'Aluno reprovado';
        } else if (5<media<=6.9){
            resultadomedia = 'Aluno em exame'
            exame();

        } else {
            return `Error`
        };
    };

        console.log(notas);
        resultado.innerHTML += `<p>${aluno} teve as seguintes notas: ${notas}, sua media ficou ${media}, portanto, ${resultadomedia}.`
    form.addEventListener('submit', click1);

    function exame () {
        const nota1 = form.querySelector('.nota1');
        const nota2 = form.querySelector('.nota2');
        const nota3 = form.querySelector('.nota3');
        const nota4 = form.querySelector('.nota4');
        const aluno = form.querySelector('.nome');
        const notaf = resultado2.querySelector('.notaf')
        
        resultadomedia = '';
        var media = Number(((nota1*2)+(nota2*3)+(nota3*4)+(nota4*1)/10) + notaf/2)
        if (media >= 5) {
            resultadomedia = 'Aluno aprovado!'
            return resultado2.innerHTML += `A sua nota final foi ${notaf}. ${aluno} foi Aprovado`
        
        } else {
            resultadomedia = 'Aluno reprovado!'
            return resultado2.innerHTML += `A sua nota final foi ${notaf}. ${aluno} foi Reprovado`
        }
    }    
}