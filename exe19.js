function calcula(){
 var acao,pc,pv,lucro;
    var qtdesup =1;
    var qtdeinf =1;
    var lucrotot =1;

    acao = prompt ("Qual é a ação?");

    do{
        pc = Number(prompt ("Qual é o preço de compra?"));
        pv = Number(prompt ("Qual é o preço de venda?"));

        lucro = pv - pc;
        lucrotot = lucrotot + lucro

        if (lucro >= 1000){
            qtdesup = qtdesup++

        }

        if (lucro <= 200){
            qtdeinf = qtdeinf++

        }
    
    acao = prompt ("Qual é a ação?");
    
    }
   

    while (acao != "f");
    
        alert ("Lucro de cada ação " + lucro);
        alert ("Quantidade de ações com lucro superior a R$ 1.000,00: "+qtdesup);
        alert ("Quantidade de ações com lucro inferior a R$ 200,00: " + qtdeinf);
        alert ("Lucro Total: " + lucrotot);
        
    }