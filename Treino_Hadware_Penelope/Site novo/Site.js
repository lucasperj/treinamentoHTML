class Produto{


    constructor(){
        this.id = 1;
        this.arrayprodutos = [];
    }
    salvar(){
        let produto = this.lerDados();

        if(this.validacampos(produto)){
            this.adicionar(produto);
        }


        this.listatabela();
        this.cancelar();

    }   

    listatabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for(let i = 0; i < this.arrayprodutos.length; i++){
            let tr = tbody.insertRow();         
 
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.arrayprodutos[i].id;
            td_produto.innerText = this.arrayprodutos[i].name;
            td_valor.innerText = this.arrayprodutos[i].valor;
            
            td_id.classList.add('center')

            let imgEdit = document.createElement('img');
            imgEdit.src = "Img/edit.png";
            td_acao.appendChild(imgEdit);

            let imgDelete = document.createElement('img');
            imgDelete.src = "Img/bin.svg";
            imgDelete.setAttribute("onclick","produto.deletar("+this.arrayprodutos[i].id+")");

            td_acao.appendChild(imgDelete);
        }

    }

    adicionar(produto){
        this.arrayprodutos.push(produto);
        this.id++;
    }

    lerDados(){
        let produto = {}

        produto.id = this.id;
        produto.name = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        
        
        return produto;
    }

    validacampos(produto){
        let msg = '';

        if(produto.name == ''){
            msg += '- Informe o nome do produto \n';
        }

        if(produto.valor == ''){
            msg += '- Informe o Valor do produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    cancelar(){
        document.getElementById('produto').value = "";
        document.getElementById('valor').value = "";

    }
    
    deletar(id){
        let tbody = document.getElementById('tbody')

        
        for(let i = 0; i <this.arrayprodutos.length; i++){
            if(this.arrayprodutos[i].id == id){
                this.arrayprodutos.splice(i,1);
                tbody.deleteRow(i);
            }
        }
    }




}
var produto = new Produto();