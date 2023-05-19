function multiplicar(){

    //Altura i amplada paret donada per l'usuari/ària
    let alturaParetBox = document.getElementById("alturaParet").value;
    let ampladaParetBox = document.getElementById("ampladaParet").value;

    // Area paret
    let totalParet = alturaParetBox * ampladaParetBox;
    
    // Numero de mans a aplicar
    let mans = document.getElementById("mans").value;
    
    //Mostrar per pantalla area a pintar i mans
    document.getElementById("totalMetresQuadrats").innerHTML = "Els metres quadrats de la paret són: " + totalParet + "m2 , i vols aplicar " + mans + " mans.";

    //Constant cobertura litres
    const cobertura = 12;

    //Formula per calcular els litres necessaris.
    let aplicar = totalParet / cobertura;
    console.log(aplicar);

    let litres = mans * aplicar;
    console.log(litres);

    //Mostrar per pantalla els litres de pintura a utilitzar
    document.getElementById("totalLitresPintura").innerHTML = "Els litres de pintura a utilitzar són: " + litres + " litres.";
    
};


    





