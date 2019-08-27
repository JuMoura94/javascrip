function calculaMed(){
    var i;
    var qtde;
    var soma =0;
    var media;
    var tipo;
    var contadora = 0; 
    for (i=0; i<30; i++){
        tipo = prompt("Digite o produto");  
        qtde = Number(prompt("Digite a qtde de um produto"));

        if (tipo == "medalha"){
            continue; //passa para a próxima interação do loop
        }
        if(qtde == 0){
            break; // sai do FOR
        }
        soma = soma + qtde;
        contadora++;
    }
    media = soma / contadora;
    alert("A média é: "+ media.toFixed(2))

}