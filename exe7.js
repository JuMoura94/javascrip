function calcula(){
    var  idade,altura,peso,p50,totalt,totpes,qtpes,porc,qtde,med
    p50=0
    totalt=0
    totpes=0
    qtpes=0
    qtde=0
    var i = 1;
    
     while (i<=5){
        idade = Number(prompt ("Qual é a Idade da "+i+"ª pessoa?"));
        altura = Number(prompt ("Qual é a Altura da "+i+"ª pessoa?"));
        peso = Number(prompt ("Qual é o peso da "+i+"ª pessoa?"));
      
        totpes = totpes + 1 
       
     if (idade>=50){
         p50=p50+1;
     }
     if((idade>=10) && (idade<=20)){
        totalt = totalt + altura
        qtde++;
     }

     if (peso<40){
        qtpes++
        porc = (qtpes/totpes)*100
     }
                            
         i = i+1;
     }
        med = totalt/qtde

         alert("O total de pessoas acima de 50 anos é: " + p50);   
         alert ("A média das alturas das pessoas com idade entre 10 e 20 anos é: " + med);
         alert ("A porcentagem de pessoas com peso inferior a 40kg entre todas as pessoas analisadas é: " + porc+"%");
 
 }