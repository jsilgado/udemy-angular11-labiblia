// Boolean
let esValido = true;
//Number
let edad = 12;
//String
let nombre = 'Pepe';
let apellido = 'Matega';
let nombre_completo = `${nombre} ${apellido}`;
//Array
let numeros = [1, 2, 3, 5, 8, 13];
let numeros2 = [1, 2, 3, 5, 8, 13];
//Tupla
let sitio = ['Casa', 41006];
//Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = -1] = "Offline";
    Estado[Estado["Undefined"] = 0] = "Undefined";
    Estado[Estado["Online"] = 1] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
//Unknow
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = true;
let nuevaCadena = 'nueva cadena';
//nuevaCadena = sinTipo;
//Any
let tipoindefinido = 'mensajito';
tipoindefinido = sinTipo;
//void
function logger() {
    console.log('');
}
