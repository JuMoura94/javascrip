function calcula(){
    var voto,tot,pnu,pbr;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    var vn = 0;
    var vb = 0;
    
    voto = Number(prompt ("Qual é o seu voto?"));
    do{
        switch(voto){
            case 1: c1++;break;
            case 2: c2++;break;
            case 3: c3++;break;
            case 4: c4++;break;
            case 5: vn++;break;
            case 6: vb++;break;
            default: alert("Voto Inválido")
        }
        voto = Number(prompt ("Informe um voto. Digite 0 para encerrar"));
    }
     while (voto!= 0);
         tot=c1+c2+c3+c4+vn+vb;
         pnu=(vn/tot)*100
         pbr=(vb/tot)*100
         alert ("Cand.1: " + c1+"- Cand.2: "+c2+"- Cand.3: "+c3+"- Cand.4: "+c4);
         alert ("Votos Nulos: " + vn);
         alert ("Votos em branco: " +vb);
         alert ("Porcentagem de Votos Nulos: " +pnu+"%");
         alert ("Porcentagem de Votos Brancos: " +pbr+"%");
    }
