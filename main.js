var express = require('express');
var app = express();
/**
 * Declarar dos variables con la palabra reservada "var", 
 * imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" en la consola. Las variables pueden ser estáticas.
 * 
 * Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.
 * Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.
 * Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, 
 * un string, un booleano y un objeto vacío, en ese mismo orden.
 */

var num1 = 1, num2 = 2;
let let1 = "dato 1", let2=" dato 2";
const constante1 = "", constante2 = 23123;
object = {
  int: 23,
  cadena: 'hola mundo ejemplo',
  bool: true,
  objeto: {}
}

console.log('suma = ' + (parseFloat(num1) + parseFloat(num2)));
console.log('resta = ' + (parseFloat(num1) - parseFloat(num2)));
console.log('multiplicacion = ' + (parseFloat(num1) * parseFloat(num2)));
console.log('division = ' + (parseFloat(num1) / parseFloat(num2)));

console.log('concatenacion let', let1+let2);

console.log('const  = '+typeof(constante1));
console.log('const  = '+typeof(constante2));

console.log('objeto ', object)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('index');
});
app.listen(3000, () => console.log('ejecutando servidor en el puerto 3000'));
