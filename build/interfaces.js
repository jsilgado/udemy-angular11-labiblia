function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Rosa', apellido: 'Perez', edad: 42 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.modelo}.`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}.`);
    }
    else {
        console.log(`El coche no tiene Color.`);
    }
}
mostrarCoche({ marca: 'Ferrari', modelo: 'F50' });
mostrarCoche({ marca: 'Ferrari', modelo: 'F40', color: 'Gris' });
let p1 = { x: 12, y: 25 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log('Resultado: ' + miBusqueda('Hola', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}
class Nino {
}
