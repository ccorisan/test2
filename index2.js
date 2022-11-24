function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    return x*y;
}
function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    return x/y;
}
function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    if (x===y) {
        return "son iguales";
    } else{
        return "false";
    }
}
function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if (str1===str2) {
        return "true";
    } else{
        return "false";
    }
}
function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor quenoventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num<90) {
        return "true";
    } else{
        return "false";
    }
}
function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num>50) {
        return "true";
    } else{
        return "false";
    }
}
function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    return x-y;
}
function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num%2===0) {
        return "es par";
    } else{
        return "false";
    }
}
function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num%2===0) {
        return "false";
    } else{
        return "es impar";
    }
}
function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num,exponent);
}
function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo (Hacia abajo)
    // Tu código:
    return Math.floor(num);
}
function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    return Math.round(num);
}
function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:
    return Math.random();
}
function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado unacadena de texto que indica si el número es positivo o negativo.
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    if (numero>0) {
        return "Es positivo";
    } else if (numero<0) {
        return "Es negativo"
    } else{
        return "false"
    }
}
function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string yseparados por un espacio.
    // Ejemplo: "Soy", "Monfortiano" -> "Soy Monfortiano"
    // Tu código:
    return (nombre+" "+apellido);
}
function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena paraque tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    return ("Hola "+nombre);
}
function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    return alto*ancho;
}
function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de uncuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return 4*lado;
}
function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programaque reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    dolar=euro*1.2
    return dolar.toFixed(2);
}

module.exports = {
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,
};