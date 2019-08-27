function funcao(){
    
    var vet = [];
    var i;
    var item1 = 0;
    var item3 =0;
    var tothom =0;
    var totid;

    for (i =0;i<3;i++){
        var objeto= {}
        
        objeto.sexo = prompt('Informe o Sexo')
        objeto.altura = Number(prompt('Informe a Altura'))
        objeto.idade = Number(prompt('Informe a Idade'))
        objeto.olhos = prompt('Informe a cor dos olhos - a(azul); v(verde); c(castanho)') 
        vet.push(objeto)
        alert('Habitante cadastrado com sucesso!');
        
        }
        var maiorid = vet[0].idade;
        for (i =0;i<vet.length;i++){
            
            if ((vet[i].olhos == "c") && (vet[i].altura > 1.6)){
                item1++
            }
            if (vet[i].idade > maiorid){
                maiorid = vet[i].idade
            }
            if (((vet[i].sexo == "f") && ((vet[i].idade >= 20) && (vet[i].idade <= 45))) || ((vet[i].olhos == "v") && (vet[i].altura < 1.7))) {
                item3++
            }
            if (vet[i].sexo == "m"){
                tothom++
            }


        }


    alert ('A média de idade das pessoas com olhos castanhos e altura superior a 1.60m é: '+ ((item1/vet.length).toFixed(2)) + 
    "\n A maior idade entre os habitantes é: "+ (maiorid) +
    "\n A quantidade de indivíduos do sexo feminino com idade entre 20 e 45 anos(inclusive) ou que tenham olhos verdes e altura inferior a 1.70m é: " + item3 +
    "\n O percentual de homens é: " + (((tothom/vet.length)*100).toFixed(2)));
}