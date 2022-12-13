//function sumar (a, b) {
//    return a +b;
//}
const sumar = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
};
// Parametros opcionales y valores por defecto
function nombreCompleto(nombre, apellido1 = 'Gomez', apelido2) {
    if (apelido2) {
        return nombre + " " + apellido1 + " " + apelido2;
    }
    else {
        return nombre + " " + apellido1;
    }
}
console.log(nombreCompleto('Pedro'));
console.log(nombreCompleto('Luis', 'Martinez'));
console.log(nombreCompleto('Jesus', 'Mateos', 'Anguita'));
//Parametros REST
function nombreCompleto2(nombre, ...restoNombre) {
    return nombre + " " + restoNombre.join(' ');
}
console.log(nombreCompleto2('Lydia', 'Diaz', 'Santos', 'Martin'));
