function calcula(){
    var  cod,valor,totv,totp,totval,pres
    totv = 0
    totp = 0 
    totval = 0
    var i = 1;
    
     while (i<=15){
        valor = Number(prompt ("Qual é o Valor da "+i+" compra?"));
        cod = prompt ("À Vista - v, ou A Prazo - p ?");
      
     if (cod=="v"){
         totv=totv+valor;
     }
         else if (cod=="p"){
         totp=totp+valor;
         }
            else{
                alert("Forma de pagamento não encontrada!");
            }

         totval=totval+valor
         pres = (totval/3)                    
         i = i+1;
     }
         alert("O valor total de compras à vista foi: R$" + totv);   
         alert ("O valor total de compras à prazo foi: R$" + totp);
         alert ("O valor total de compras foi: R$" + totval);
         alert ("O valor da primeira prestação é: R$" + pres);
 
 }