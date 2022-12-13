// Boolean
let esValido: boolean = true;

//Number
let edad: number = 12;

//String
let nombre: string = 'Pepe';
let apellido: string = 'Matega';

let nombre_completo: string = `${nombre} ${apellido}`;

//Array
let numeros: number[] = [1,2,3,5,8,13];
let numeros2: Array<number> = [1,2,3,5,8,13];

//Tupla
let sitio: [string, number] = ['Casa', 41006];

//Enum
enum Estado {
    Offline = -1,
    Undefined = 0,
    Online = 1
}

let stat: Estado = Estado.Online;
console.log (stat);

//Unknow
let sinTipo: unknown = 'Hola';
sinTipo = 32;
sinTipo = true;

let nuevaCadena: string = 'nueva cadena'
//nuevaCadena = sinTipo;

//Any
let tipoindefinido: any = 'mensajito';
tipoindefinido = sinTipo;

//void
function logger(): void {
    console.log('');
}