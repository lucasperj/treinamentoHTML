        // var nome= window.prompt('Me informe o seu nome: ')
        //var peso= Number(window.prompt('Me informe o seu peso: '))
        //var altura= Number(window.prompt('Me informe a sua altura: '))
        //var imc = Number(((altura**2)*peso)/10).toFixed(1)
        //Number(window.alert(`seu imc eh: ${imc}`))

       /* const nome = artur
        document.body.innerHTML+=`a` */


/*var opcao= Number(prompt(' Escolha a sua regiao: \n 1 - Sul \n 2 - Sudeste \n 3 - Norte \n 4 - Nordeste \n 5 - Centro-Oeste: '))
var num1=Number(prompt("Digite o ddd da capital de seu estado: "))

if (opcao == 1){

        switch (num1){
                case 41:
                        document.body.innerHTML = 'VOCE EH DE PR'
                break

                case 47:
                        document.body.innerHTML = 'VOCE EH DE SC'
                break

                case 51:
                        document.body.innerHTML = 'VOCE EH DE RS'
                break

                default: 
                        document.body.innerHTML = 'Nao eh um ddd valido'
                break
        }

}

else if (opcao ==2) {
        switch (num1){
                case 11:
                        document.body.innerHTML = 'VOCE EH DE SP'
                break

                case 21:
                        document.body.innerHTML = 'VOCE EH DE RJ'
                break

                case 27:
                        document.body.innerHTML = 'VOCE EH DE ES'
                break

                case 31:
                        document.body.innerHTML = 'VOCE EH DE MG'
                break

                default:
                        document.body.innerHTML = 'nao eh um ddd de um estado brasileiro'
                break
        }
}

else if (opcao ==3){
        switch (num1){
                case 63:
                        document.body.innerHTML = 'VOCE EH DE TO'
                break

                case 68:
                        document.body.innerHTML = 'VOCE EH DE AC'
                break

                case 69:
                        document.body.innerHTML = 'VOCE EH DE RO'
                break

                case 91:
                        document.body.innerHTML = 'VOCE EH DE PA'
                break

                case 95:
                        document.body.innerHTML = 'VOCE EH DE RR'
                break

                case 96:
                        document.body.innerHTML = 'VOCE EH DE AP'
                break

                case 97:
                        document.body.innerHTML = 'VOCE EH DE AM'
                break

                default:
                        document.body.innerHTML = 'nao eh um ddd de um estado brasileiro'
                break
        }
}

else if (opcao == 4 ){
        switch (num1){
                case 71:
                        document.body.innerHTML = 'VOCE EH DE BA'
                break

                case 81:
                        document.body.innerHTML = 'VOCE EH DE PE'
                break

                case 82:
                        document.body.innerHTML = 'VOCE EH DE AL'
                break

                case 83:
                        document.body.innerHTML = 'VOCE EH DE PB'
                break

                case 84:
                        document.body.innerHTML = 'VOCE EH DE RN'
                break

                case 85:
                        document.body.innerHTML = 'VOCE EH DE CE'
                break

                case 86:
                        document.body.innerHTML = 'VOCE EH DE PI'
                break

                case 79:
                        document.body.innerHTML = 'VOCE EH DE SE'
                break

                case 98:
                        document.body.innerHTML = 'VOCE EH DE MA'
                break

                default:
                        document.body.innerHTML = 'nao eh um ddd de um estado brasileiro'
                break
        }
}

else if (opcao == 5){

        switch(num1){

                case 65:
                        document.body.innerHTML = 'VOCE EH DE MG'
                break

                case 67:
                        document.body.innerHTML = 'VOCE EH DE MS'
                break

                case 61:
                        document.body.innerHTML = 'VOCE EH DE DF'
                break

                case 62:
                        document.body.innerHTML = 'VOCE EH DE GO'
                break

                default:
                        document.body.innerHTML = 'nao eh um ddd de um estado brasileiro'
                break
        }
}

else {
        document.body.innerHTML = 'opcao incorreta, reinicie a pagina'
}*/

function resultado(){
        const form = document.querySelector('.form')
        function recebe(evento){
                const nome=form.querySelector('.nome')
                const sobrenome=form.querySelector('.sobrenome')
                const idade=form.querySelector('.idade')
                const peso=form.querySelector('.peso')             
        }
        form.addEventListener('submit',recebe)
}
resultado()

   
