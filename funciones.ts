//function sumar (a, b) {
//    return a +b;
//}

const sumar: (a: number, b: number) => number  = function (a: number, b:number) : number {
    return a + b ;
}

const sumar2 = function (a: number, b:number) : number {
    return a + b ;
}

// Parametros opcionales y valores por defecto
function nombreCompleto (nombre: string, apellido1: string = 'Gomez', apelido2?: string): string {
    if (apelido2) {
        return nombre + " " + apellido1 + " " + apelido2; 
    } else {
        return nombre + " " + apellido1;
    }
 }

 console.log(nombreCompleto('Pedro'));
 console.log(nombreCompleto('Luis', 'Martinez'));
 console.log(nombreCompleto('Jesus', 'Mateos', 'Anguita'));


//Parametros REST
function nombreCompleto2 (nombre: string, ...restoNombre: string []): string {
    return nombre + " " + restoNombre.join(' ');
}

console.log(nombreCompleto2('Lydia', 'Diaz', 'Santos', 'Martin'));