/*
La varra "a" es convertida para "ai"
La varra "e" es convertida para "enter"
La varra "i" es convertida para "imes"
La varra "o" es convertida para "ober"
La varra "u" es convertida para "ufat"

*/
//    i para que afecte a mayuscula o minuscula 
//  g es para toda la linea u oracion 
// m es para que afecte a multiples lineas o parrafo 

// ----------------
function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputTexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputTexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copiado");
  }

