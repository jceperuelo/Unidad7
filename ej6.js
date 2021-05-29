var letras = ['T','R','W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N','J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");

//ejercicio 6.2//

if(numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
  }

//ejercicio 6.3//

else {
    var letraCalculada = letras[numero % 23];
    alert(letras[numero % 23])}

//ejercicio 6.4//

if(letraCalculada != letra) {
    alert("La letra que ha indicado no es correcta");
  }

else {
    alert("El número de DNI y su letra son correctos");
  }