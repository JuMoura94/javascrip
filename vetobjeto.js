function funcao(){
    // cria o vetor
    var vet = [];
    var i;
    var estoque=0;
    // cria o objeto
    var objeto= {}
    // cria os produtos
    for (i =0;i<5;i++){
    objeto.codigo = Number(prompt('Informe o código'))
    objeto.nome = prompt('Informe o nome')
    objeto.qtde = Number(prompt('Informe a quantidade'))
    objeto.preco = Number(prompt('Informe o preço')) 
    vet.push(objeto)
    alert('Produto criado com sucesso');
    }
    for (i =0;i<5;i++){
        estoque = estoque + vet[i].qtde

    }
    alert ('Estoque atual é: '+ estoque);








}