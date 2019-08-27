function funcao(){
    
    var vet = [];
    var i;
    var totsal=0;
    var totfil=0;
    var mulher=0;

    for (i =0;i<3;i++){
        var objeto= {}
        objeto.salario = Number(prompt('Informe o Salário'))
        objeto.idade = Number(prompt('Informe a Idade'))
        objeto.sexo = prompt('Informe o Sexo')
        objeto.filho = Number(prompt('Informe a quantidade de Filho')) 
        vet.push(objeto)
        alert('Habitante cadastrado com sucesso!');
        
        }

        var maiorsal=vet[0].salario;
        
        for (i =0;i<vet.length;i++){

            totsal = totsal + vet[i].salario
            totfil = totfil + vet[i].filho

            if (vet[i].salario > maiorsal){
                maiorsal = vet[i].salario
        
            }

            if ((vet[i].sexo == "f") && (vet[i].salario > 1000)){

                mulher++

            }


        }


    alert ('A média do salário da população é: '+ (totsal/vet.length) + 
    "\n A média de número de filhos é: "+ ((totfil/vet.length).toFixed(2)) +
    "\n O maior salário é: " + maiorsal +
    "\n O percentual de mulheres com salário superior a R$ 1.000,00 é: " + (((mulher/vet.length)*100).toFixed(2)));






}