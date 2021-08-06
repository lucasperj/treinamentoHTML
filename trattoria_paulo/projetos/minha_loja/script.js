class Produto {
    constructor () {
        this.id = 1;
        this.arrayProdutos =[]
        this.editId = null
    }

    salvar() {
        let produto = this.lerdados();

       if (this.validaCampos(produto)) {
           if(this.editId == null) {
            this.adicionar(produto);
        }
        else {
            this.atualizar(this.editId, produto);
        }
       }
        
        this.listaTabela();
        this.cancelar();
    }
    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText= ''
         for (let i = 0; i < this.arrayProdutos.length; i++) {
             let tr = tbody.insertRow();

             let td_id = tr.insertCell();
             let td_produto = tr.insertCell();
             let td_preço = tr.insertCell();
             let td_Ações = tr.insertCell();

             td_id.innerText = this.arrayProdutos[i].id;
             td_produto.innerText = this.arrayProdutos[i].nomedoproduto;
             td_preço.innerText = this.arrayProdutos[i].preço.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

             td_id.classList.add("center");

             let imgEdit = document.createElement("img");
             imgEdit.src = "img/editing.png"
             imgEdit.setAttribute("onclick", "produto.editar("+JSON.stringify(this.arrayProdutos[i])+")");

             let imgDelete =document.createElement("img")
             imgDelete.src = "img/bin.png"
             imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")");

             td_Ações.appendChild(imgEdit);
             td_Ações.appendChild(imgDelete);

            //  console.log(this.arrayProdutos)

         }
    }

    adicionar(produto) {
        produto.preço = parseFloat(produto.preço)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomedoproduto = produto.nomedoproduto
                this.arrayProdutos[i].preço = produto.preço;
            }
        }
    }

    editar(dados){
        this.editId = dados.id;

        document.getElementById ("produto").value = dados.nomedoproduto;
        document.getElementById ("preço").value = dados.preço;

        document.getElementById ("btn1").innerText = "atualizar";

    }

    lerdados() {
        var produto ={}
        produto.id = this.id;
        produto.nomedoproduto = document.getElementById ("produto").value;
        produto.preço = document.getElementById ("preço").value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

        return produto
    }
    validaCampos(produto) {
        let msg =""

        if(produto.nomedoproduto == "") {
            msg += " - informe o nome do produto \n";
        }

        if(produto.preço == '') {
            msg += " - informe o preço do produto \n";
        }

        if(msg != "") {
            alert(msg);
            return false
        }

        return true  
    }

    cancelar(){
        document.getElementById ("produto").value = "";
        document.getElementById ("preço").value = "";

        document.getElementById ("btn1").innerText = "salvar";
        this.editId = null;
    }

    deletar(id){

        if (confirm("Deseja realmente deletar o produto do ID" +id)) {
            let tbody = document.getElementById("tbody");
    
            for(let i = 0; i <this.arrayProdutos.length; i++) {
        
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
            console.log("deletado");
            console.log(produto)
        }
    }
}

var produto = new Produto();