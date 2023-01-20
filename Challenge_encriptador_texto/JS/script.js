//encriptar texto con validaciones de mayusculas, caracteres especiales y acentos



function encriptar(){
    //obteniendo la cadena de texto
    var texto = document.getElementById("codigo_escrito").value;
    console.log(texto);

    //separando la cadena de texto
    var separador = texto.split(""); 

    //console.log(separador);

    for(var i= 0;i < separador.length; i++ ){
        //console.log(separador[i]);
        if(separador[i] === "á" || separador[i] === "é" || separador[i] === "í" || separador[i] === "ó" || separador[i] === "ó"){
        console.log("Error!! Prohibido el uso de acentos");
        break;
        }

        if(separador[i].match(/[A-Z]/)){
            console.log("Error!! Prohibido el uso de Mayusculas");
            break;
        }
        
        if(separador[i].match(/[.*+\-?^${}()|[\]\\]/g)){
            console.log("Error!! encontrado caracter espcial "+ separador[i]);
            break;
        }  

        separador[i] = separador[i].replace("a", "ai")
        separador[i] = separador[i].replace("e", "enter")
        separador[i] = separador[i].replace("i", "imes")
        separador[i] = separador[i].replace("o", "ober")
        separador[i] = separador[i].replace("u", "ufat")
        
    }
    console.log(separador);

}

function desencriptar(){

    //obteniendo la cadena de texto
    var texto = document.getElementById("codigo_escrito").value;
    console.log(texto);

    //separando la cadena de texto
    var separador = texto.split(""); 

    //console.log(separador);

    for(var i= 0;i < separador.length; i++ ){

        //console.log(separador[i]);
        if(separador[i] === "á" || separador[i] === "é" || separador[i] === "í" || separador[i] === "ó" || separador[i] === "ó"){
        console.log("Error!! Prohibido el uso de acentos");
        break;
        }

        if(separador[i].match(/[A-Z]/)){
            console.log("Error!! Prohibido el uso de Mayusculas");
            break;
        }
        
        if(separador[i].match(/[.*+\-?^${}()|[\]\\]/g)){
            console.log("Error!! encontrado caracter espcial "+ separador[i]);
            break;
        }

        if(i === (separador.length - 1)){

            texto = texto.replaceAll("ai", "a");
            texto = texto.replaceAll("enter", "e");
            texto = texto.replaceAll("imes", "i");
            texto = texto.replaceAll("ober", "o");
            texto = texto.replaceAll("ufat", "u");

        }
        
    }

    console.log(texto);
        
}

function copiarTexto(){

    var content = document.getElementById('codigo_escrito');

    content.select();
    document.execCommand('copy');

    alert("Copied!");

}



