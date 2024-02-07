// Funciones ------------------------------------------------------

// Funcion sin un retorno (void)
function addNumbers(){
}

// Funcion con parametros y un retorno
function addNumbers2(a:number, b:number){
    return a+b;
}
const result:number = addNumbers2(1,2);
console.log({result});  // otra manera de imprimir datos

// Funciones lambda con autodefinicion
const addNumbersArrow = (a:number, b:number) => {
    return a+b;
}

// Funciones lambda con definicion de datos
const addNumbersArrow2 = (a:number, b:number):string => {
    //return (a+b).toString(); // retorno del string
    return `${a = b}`;  // Permite hacer caracteres multilineas e inyectar expresiones js en un template
}
const result2:string = addNumbersArrow2(1,5);
console.log({result2});

// Funcion con parametros obligatorios, opcionales y definidos (se debe colocar en ese orden)
function multiply( firstNumber:number , secondNumber?:number, base:number = 2){
    return firstNumber *base;
}
const multiplyResult:number = multiply(5);
console.log({multiplyResult});

// Funciones con objetos como argumentos
interface Character {
    name: string;
    hp: number;
    showHp: () => void;  // para definir funciones se hacen con flecha y su return
}
const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;
}
const tilin: Character = {
    name: 'Tilin',
    hp: 1000,
    showHp(){
        // Inyecta en el texto el this que es el objeto con el parametro hp
        console.log(`Puntos de vida: ${this.hp}`);  
    }
}
healCharacter(tilin, 10);
healCharacter(tilin,200);

export{};