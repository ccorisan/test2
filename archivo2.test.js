
const {
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
} = require("./index2.js");

//multiplica 
describe('multiplica(x, y)', function() {
    it("Deberia devolver una multiplicación", function(){
        expect(multiplica(5,4)).toBe(20);
        //expect(multiplica(5,2)).toBe(2);
    })
})

//divide 
describe('divide(x, y)', function() {
    it("Deberia devolver una división", function(){
        expect(divide(8,4)).toBe(2);
        //expect(divide(5,2)).toBe(2);
    })
})

//sonIguales(x, y)
describe('sonIguales(x, y)', function() {
    it("Deberia devolver un número igual", function(){
        expect(sonIguales(4,4)).toBe("son iguales");
        expect(sonIguales(4,3)).toBe("false");
        //expect(sonIguales(4,3)).toBe("son iguales");
    })
})

//tienenMismaLongitud
describe('tienenMismaLongitud(str1, str2)', function() {
    it("Deberia devolver un número con la misma longitud", function(){
        expect(tienenMismaLongitud("hola","hola")).toBe("true");
        expect(tienenMismaLongitud(4,3)).toBe("false");
        //expect(tienenMismaLongitud(4,3)).toBe("son iguales");
    })
})

//menosQueNoventa
describe('menosQueNoventa(num)', function() {
    it("Deberia devolver un número menor de 90", function(){
        expect(menosQueNoventa(55)).toBe("true");
        expect(menosQueNoventa(110)).toBe("false");
        //expect(menosQueNoventa(200)).toBe("true");
    })
})

//menosQueNoventa
describe('mayorQueCincuenta(num)', function() {
    it("Deberia devolver un número mayor que cincuenta", function(){
        expect(mayorQueCincuenta(110)).toBe("true");
        expect(mayorQueCincuenta(50)).toBe("false");
        //expect(mayorQueCincuenta(20)).toBe("true");
    })
})

//resta 
describe('obtenerResto(x, y)', function() {
    it("Deberia devolver una resta", function(){
        expect(obtenerResto(5,4)).toBe(1);
        //expect(obtenerResto(5,2)).toBe(2);
    })
})

//es par
describe('esPar(num)', function() {
    it("Deberia devolver un número par", function(){
        expect(esPar(110)).toBe("es par");
        expect(esPar(51)).toBe("false");
        //expect(esPar(27)).toBe("true");
    })
})

//es impar
describe('esImpar(num)', function() {
    it("Deberia devolver un número impar", function(){
        expect(esImpar(11)).toBe("es impar");
        expect(esImpar(12)).toBe("false");
        //expect(esImpar(22)).toBe("true");
    })
})

//elevar a un exponente
describe('elevar(num, exponent)', function() {
    it("Deberia devolver el resultado de elevar un numero a un exponente", function(){
        expect(elevar(2,3)).toBe(8);
        //expect(elevar(num, exponent)(5,2)).toBe(2);
    })
})

//redondear un numero hacia abajo 
describe('redondearNumero(num)', function() {
    it("Deberia devolver un número redondeado hacia abajo", function(){
        expect(redondearNumero(11.2)).toBe(11);
        //expect(redondearNumero(12.8)).toBe(5);
    })
})

//redondear un numero hacia arriba
describe('redondearHaciaArriba(num)', function() {
    it("Deberia devolver un número redondeado hacia arriba", function(){
        expect(redondearHaciaArriba(11.5)).toBe(12);
        //expect(redondearHaciaArriba(12.8)).toBe(5);
    })
})

//devolver un numero random
describe('numeroRandom()', function() {
    it("Deberia devolver un número random", function(){
        expect(typeof numeroRandom()).toBe('number');
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        expect(numeroRandom()).toBeLessThan(1);
    })
})

// es positivo
describe('esPositivo(numero)', function() {
    it("Deberia ser un número positivo", function(){
        expect(esPositivo(15)).toBe("Es positivo");
        expect(esPositivo(-22)).toBe("Es negativo");
        expect(esPositivo(0)).toBe("false");
        //expect(esPositivo(-2)).toBe("Es positivo");
        //expect(esPositivo(22)).toBe("Es negativo");
        //expect(esPositivo(0)).toBe("Es negativo");
    })
})

//Combinar nombres 
describe('combinarNombres(nombre, apellido)', function() {
    it("Deberia devolver un nombre y apellido combinado ", function(){
        expect(combinarNombres("Kory", "Sanchez")).toBe("Kory Sanchez");
    })
})

//Obtener saludo
describe('obtenerSaludo(nombre)', function() {
    it("Deberia devolver un saludo", function(){
        expect(obtenerSaludo("Kory")).toBe("Hola Kory");
    })
})

//obtener área del rectangulo
describe('obtenerAreaRectangulo(alto, ancho)', function() {
    it("Deberia devolver el área del rectangulo", function(){
        expect(obtenerAreaRectangulo(2,3)).toBe(6);
        //expect(obtenerAreaRectangulo(2,3)).toBe(8);
    })
})

//retornar el perimetro de un cuadrado
describe('retornarPerimetro(lado)', function() {
    it("Deberia devolver el perimetro de un cuadrado", function(){
        expect(retornarPerimetro(3)).toBe(12);
        //expect(retornarPerimetro(3)).toBe(10);
    })
})

//de Euro a Dolar 
describe('deEuroAdolar(euro)', function() {
    it("Deberia devolver la equivalencia en dolares", function(){
        expect(deEuroAdolar(1)).toBe("1.20");
        //expect(deEuroAdolar(3)).toBe(3);
    })
})

