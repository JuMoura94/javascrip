function calcula(){
    var  idade,peso,altura,olho,cab,qt50,idalt,medid,npes,oazul,pazul,nruivas,qtde
    qt50 = 0
    qtde = 0
    idalt = 0
    npes = 0
    oazul = 0
    nruivas = 0
    var i;

     for (i=1;i<=6;i++){
        idade = Number(prompt ("Qual é a Idade da "+i+"ª pessoa?"));
        altura = Number(prompt ("Qual é a Altura da "+i+"ª pessoa?"));
        peso = Number(prompt ("Qual é o peso da "+i+"ª pessoa?"));
        olho = prompt ("Qual é a cor do olho da "+i+"ª pessoa? (a-azul;p-preto;v-verde;c-castanho)");
        cab = prompt ("Qual é a cor do cabelo da "+i+"ª pessoa? (p-preto;c-castanho;l-loiro;r-ruivo) ");

        npes++

        if ((idade>50) && (peso<60)){
            qt50++;  
        }
        if (altura < 1.5){
            idalt = idalt + idade;
            qtde++;
             
        }
        if ((olho=="a") || (olho=="A")) {
            oazul++;
            pazul = (oazul/npes)*100;
        }
        if (((cab=="r") || (cab=="R")) && (olho!="a")){
            nruivas++;
        }
     }
         medid = idalt/qtde 

         alert("A quantidade de pessoas com idade superior a 50 anos e peso inferior a 60kg: " + qt50);   
         alert ("A média das idade das pessoas com altura inferior a 1,50m: " + medid);
         alert ("A porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas é: " +pazul+"%");
         alert ("A quantidade de pessoas ruivas e que não possuem olhos azuis: " +nruivas);
 }