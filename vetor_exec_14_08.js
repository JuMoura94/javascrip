function exe3(){
    let i,codprod =[],totprod = [],cli,cod,qtd,aux;
// entrada de dados
    for (i=0;i<10;i++){
        codprod.push(Number(prompt("Digite o código do " + (i+1) + "º produto: ")));
        totprod.push(Number(prompt("Digite a quantidade do " + (i+1) + "º produto: ")));
    }  
        cli = Number(prompt("Digite o código do Cliente: "));
// processamento de dados  
        do{
            cod = Number(prompt("Digite o código do produto: "));
            aux = codprod.indexOf(cod);

            if (aux == -1){
                    alert("Produto não existe!");
                }
                else {
                    qtd = Number(prompt("Digite a quantidade que deseja comprar: "));
                    
                    if (qtd <= totprod[aux]){
    
                        totprod[aux] = (totprod[aux] - qtd);
                        alert("Produto atendido. Volte Sempre");
                    }
                    else{
                        alert("Não temos estoque suficiente dessa mercadoria.");
                    }
                }
            cli = Number(prompt("Digite um novo código do Cliente. Digite 0 para encerrar"));
        }
        while (cli != 0);
// saída de dados     
    alert("Código dos produtos: " + codprod +
    "\nQuantidade de Produto: " + totprod);
}
function exe5(){
    let i,log =[],prog = [], alunos = [];

    for (i=0;i<15;i++){
        log.push(prompt("Códigos alunos de Lógica: "))
    }
    for (i=0;i<10;i++){
        prog.push(prompt("Códigos alunos de Linguagem de Programação: "))

    }   
    for (i=0;i<10;i++){
       
            if ((prog.indexOf(log[i])) != -1){
                alunos.push(log[i]) 
            }
    
    }
    alert("Alunos matriculados no curso de Lógica: " + log +
    "\nAlunos matriculados no curso de Linguagem e Programação: " + prog +
    "\nAlunos matriculados nos dois cursos: " + alunos);
}

function exe6(){
    let i,nome = [], vendas = [], comis = [], tot = [], totvend = 0, maior = 0,maiorvend,indmaior,indmenor, menor=100000000000000000000,menorvend;

    for (i=0;i<10;i++){
        nome.push(prompt("Digite o nome do "+ (i+1) + "º funcionário: "));
        vendas.push(Number(prompt("Digite o valor das vendas de "+ (nome[i]) + " : ")));
        comis.push(Number(prompt("Digite a comissão de "+ (nome[i]) + " : ")));
    }
    for (i=0;i<10;i++){
        tot[i] = ((vendas[i] * (comis[i]/100)) + vendas[i]);
        totvend = totvend + tot[i];
            if (tot[i] > maior){
                maior = tot[i]

            }
            if (tot[i] < menor){
                menor = tot[i]

            }
    }

    indmaior = tot.indexOf(maior);
    maiorvend = nome[indmaior];

    indmenor = tot.indexOf(menor);
    menorvend = nome[indmenor];

    alert("Total a Receber: " + nome + " - " + tot +
    "\nTotal das vendas de todos os vendedores: " + totvend +
    "\nMaior valor: " + maior + " - " + maiorvend + 
    "\nMenor valor: " + menor + " - " + menorvend ); 



}