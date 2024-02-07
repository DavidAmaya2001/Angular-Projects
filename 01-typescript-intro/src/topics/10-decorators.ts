// Decoradores --------------------------------------------------------------------

// decorador
function classDecorator<T extends {new(...args:any[]):{}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New property';
        hello = 'override';
    }
}



@classDecorator
export class SuperClass {

    public myProperty:string = 'abc';
    print(){
        console.log('Hola mundo');
    }
}

console.log(SuperClass);  // impresion de la definicion de la clase

const myClass = new SuperClass();
console.log(myClass);  // impresion de la instancia de la clase

