function calcula(){
        var idade;
        var sexo;
        var salario;
        var qtde = 0;
        var totsalario = 0;
        var medsalario;
        var maiorid = 0;
        var menorid=1000;
        var mulhersal = 0;
        var menorsal=100000000000000;
        var idmenorsal;
        var sexmenorsal;

        
        do{
            idade = Number(prompt("Digite uma idade"));
            sexo = prompt("Digite o sexo");
            salario = Number(prompt("Digite o salario"));
            qtde++;
            totsalario = totsalario + salario;

            if(idade>maiorid){
                maiorid = idade;
            }

            if (idade<menorid){
                menorid = idade;
            }

            if((sexo == "f") && (salario <= 200)){
                mulhersal++;
            }

            if(salario < menorsal){
                idmenorsal = idade;
                sexmenorsal = sexo;
            }

        }

        while(idade > 0);

        medsalario = totsalario/qtde;

        alert("A média dos salários do grupo é: "+ medsalario);
        alert("A maior idade do grupo é: "+ maiorid + ".A menor idade do grupo é: " + menorid);
        alert("Quantidade de mulheres com salário até R$ 200,00: "+ mulhersal);
        alert("Idade da pessoa com menor salário: "+ idmenorsal + "Sexo da pessoa com menor salário: " + sexmenorsal);



}