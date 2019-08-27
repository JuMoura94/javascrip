function exe1(){
    let i,n = [],npar = [],nimp = [];

    for (i=0;i<6;i++){
        n.push(prompt("Digite um número"));
    }

    for (i=0; i < n.length;i++){

        if (n[i] % 2 == 0){
            npar.push(n[i]);
        }
            else {
                nimp.push(n[i]);
            }
    
    }

    alert("Vetor formado: " + n +
    "\nNúmeros Pares: " + npar +
    "\nQuantidade de números pares: " + npar.length + 
    "\nNúmeros Ímpares: " + nimp +
    "\nQuantidade de números ímpares: " + nimp.length);  

}

function exe2(){
    let i,n =[],mul2 = [],mul3 = [],mul23 = [];

    for (i=0;i<7;i++){
        n.push(prompt("Digite um número"))

        if (n[i] % 2 == 0){
            mul2.push(n[i]);
        }
        if (n[i] % 3 == 0){
            mul3.push(n[i]);
        }    
        if ((n[i] % 2 == 0) && (n[i] % 3 == 0)){
            mul23.push(n[i]);
        }
    }

    alert("Vetor formado: " + n +
    "\nMúltiplos de 2: " + mul2 + 
    "\nMúltiplos de 3: " + mul3 + 
    "\nMúltiplos de 2 e 3: " + mul23);
}

function exe4(){
    let i,n =[],indices = [];

    for (i=0;i<15;i++){
        n.push(Number(prompt("Digite um número")));

    }
    
    for (i=0;i<n.length;i++) {
        
        if (n[i] == 30){
        indices.push(i) 
        }
      }

    alert("Vetor formado: " + n +
    "\nPosição do número 30: " + indices);
}

function exe5(){
    let i,j,log =[],prog = [], alunos = [];

    for (i=0;i<15;i++){
        log.push(prompt("Códigos alunos de Lógica: "))
    }
    for (j=0;j<10;j++){
        prog.push(prompt("Códigos alunos de Linguagem de Programação: "))

    }   
    for (j=0;j<10;j++){
        for (i=0;i<15;i++){
            if (log[i] == prog[j]){

                alunos.push(log[i]) 
        
            }
        }
    }
    alert("Alunos matriculados no curso de Lógica: " + log +
    "\nAlunos matriculados no curso de Linguagem e Programação: " + prog +
    "\nAlunos matriculados nos dois cursos: " + alunos);
}