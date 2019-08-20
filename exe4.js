function calcula() {
    var i = 1;
    var n;
    var mult;
    n = Number(prompt ("Qual tabuada você quer?"));

    while (i <= 10){
        mult = n * i
        document.write(n + " * " + i + " = "+ mult + "<br/>");
        i = i+1
    }
    

    
}