// Clases basicas -------------------------------------------------------------------

// public permite ver la clase desde carpetas que la importen
// private permite ver las propiedades solo en la clase


export class Person {
    /*
    public name: string;
    public address: string;

    constructor(name: string, address:string){
        this.name = name;
        this.address = address;
    };*/

    // Es lo mismo que el metodo clasico
    constructor(
        public name: string,
        public lastname:string,
        private address:string = 'No address'
    ){}
}

// Herencia clasica
/*
export class Hero extends Person{

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
    ){
        super(realName, 'Soyapango'); // super llena los parametros heredados
    }
}*/

//const ironman = new Hero('Tilin', 45, 'Eso Tilin'); // en un extend se llena el constructor desde los nuevos parametros

export class Hero{

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,  // nuevo parametro de Hero
    ){
        //this.person = new Person(realName);
    }
}

const persona = new Person('Tilin', 'Baila Tilin', 'Soyapango');
const ironman = new Hero('Tilin', 45, 'Eso Tilin', persona);  // se pueden introducir los parametros de la clase padre


console.log(ironman);