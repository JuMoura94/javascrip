function calcula(){
    var preco;
    var qtde = 120;
    var lucro;
    var saida = "resultado"
    var lucromax = 0;
    var precomax = 0;
    for(preco = 5.0;preco >= 1.0;preco = preco - 0.50){
        lucro = preco * qtde - 200
        if (lucro > lucromax){
            lucromax = lucro;
            precomax = preco;
        }
        saida = saida + "\n Lucro com preço a " + preco + " o lucro é:  " + lucro;
        qtde = qtde + 26;
}

alert(saida);
alert("Lucro Máximo " + lucromax + " Preço: " + precomax);
}