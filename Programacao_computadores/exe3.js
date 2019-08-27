function calcula(){
   var f1,f2,f3,f4,f5
   f1 = 0
   f2 = 0 
   f3 = 0
   f4 = 0
   f5 = 0
   
   var i = 1;
   var idade;
    while (i<=8){
    idade = Number(prompt ("Digite uma idade"));
     
    if (idade<=15){
        f1 = f1 + 1;
    }
        else if ((idade>15) && (idade<=30)){
        f2 = f2 +1;
        }
            else if ((idade>30) && (idade<=45)){
                f3 = f3+1;
            }
                else if ((idade>45) && (idade<=60)){
                    f4 = f4+1;
                }
                    else if (idade>60){
                        f5 = f5+1;
                    }
                    
            i = i+1;
    }
        alert("Faixa 1: " + f1 + "Faixa 2: " + f2 + "Faixa 3: " + f3 + "Faixa 4: " + f4 + "Faixa 5: " + f5);   
        alert ("Porcentagem de pessoas na 1ª faixa em relação ao total: " + f1/8*100);
        alert ("Porcentagem de pessoas na 1ª faixa em relação ao total: " + f5/8*100);

}