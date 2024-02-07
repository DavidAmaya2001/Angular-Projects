// Arreglos -------------------------------------------------------

// Arreglo de String
let skills = ['Bash', 'Counter', 'Healing'];

// Arreglo de 2 tipos de datos
let skills2 = ['Bash', 'Counter', 'Healing', true];

// Arreglo de 3 tipos de datos
let skills3 = ['Bash', 'Counter', 'Healing', true, 123];

// Arreglo con tipo de dato definido
let skills4:string[]= ['Bash', 'Counter', 'Healing'];

// Arreglo constante
const skills5:string[]= ['Bash', 'Counter', 'Healing'];

// Objetos ----------------------------------------------------------

//Objeto string con parametros autodefinidos
const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}
// Interfaz (plantilla) de un objeto para definir tipos de datos
interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometwon?: string;  // Parametro opcional (?) (con valor o undefined)
}

strider.hometwon = 'Soyapango';  // Asignacion de un parametro a un objeto

console.table(strider);

export{};