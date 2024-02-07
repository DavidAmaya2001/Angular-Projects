// Variables en TypeScript -----------------------------------------

// Variable con declaracion automatica
let name = 'Strider';
name = '123';
name = 'Tilin';

// Variable declarada con tipo de dato
let hpPoints:number = 95;

// Variable declarada con dos tipos de datos
let hpPoints2:number | string = 95;
hpPoints2 = 'Full';
hpPoints2 = 500;

// Variable declarada como numero o string
let hpPoints3:number | 'Full'  = 100;
hpPoints3 = 200;
hpPoints3 = 'Full';

// Variable que nunca cambiara
const name2= 'Strider';

const isAlive:boolean = true;

console.log({
    name, hpPoints, isAlive  // Impresion como objeto
})

export{};