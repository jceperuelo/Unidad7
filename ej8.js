/*var numero = prompt("Introduce un número");

var resultado = parImpar(numero);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
console.log ("El número "+numero+" es "+resultado)*/


// Ejercicio 9

function info(cadena) {

    var resultado = "La cadena \""+cadena+"\" ";
  
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
  }

  console.log(info("SUBIMOS DE NIVEL LA MURALLA"))
  console.log(info("Desbloqueamos esta unidad en Thower Hall nueve"))
  console.log(info("solo usaremos queenwalk para lootear los recursos"))
 
