// Genericos -------------------------------------------------------------------------

// en caso de no saber que tipo de dato es el argumento que se recibira
// <T> define a la funcion de tipo generica                    </T>
export function whatsMyType<T>( argument:T ): T{
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo');  // se le define como string al generico
let amINumber = whatsMyType<number>(100.22);  // se le define como number al generico
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);  // se le define como array de numbers al generico

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
