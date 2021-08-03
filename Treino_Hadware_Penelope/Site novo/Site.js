class Produto{
    Constructor(){
        this.id = 1;
        this.arrayprodutos = [];
    }
    salvar(){
        let produto = this.lerDados();

        if(this.validacampos(produto)){
            alert("Save")
        }


        console.log(produto);

    }

    lerDados(){
        let produto = {}

        produto.id = this.id;
        produto.Name = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        
        
        return produto;
    }

    validacampos(produto){
        let msg = '';

        if(produto.Name == ''){
            msg += '- Informe o nome do produto \n';
        }

        if(produto.Valor == ''){
            msg += '- Informe o Valor do produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true
    }

    cancelar(){

    }




}
var produto = new Produto();