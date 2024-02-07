// Desestructuracion de Argumentos ---------------------------------------------------

// La exportacion es para el archivo 07
export interface Product {   // Creacion de una plantilla para los productos
    description: string,
    price: number,
}

const phone: Product = {  // Creacion de un producto con la plantilla
    description: " Nokia A1",
    price: 200
}
const tablet: Product ={  // Creacion de otro producto con la plantilla
    description: "iPad Air",
    price: 500
}

interface TaxCalculationOptions{ // Creacion de otra interfaz para el calculador de impuesto
    tax:number;  // Declaracion de un parametro 
    products:Product[];  // Implementacion de la plantilla de Productos
}

// Funcion que recibe por parametro un objeto con parametros y retorna un number
//function taxCalculation(options:TaxCalculationOptions):[number,number]{
//function taxCalculation({tax, products}:TaxCalculationOptions):[number,number]{
export function taxCalculation(options:TaxCalculationOptions):[number,number]{

    const {tax, products} = options;  // desestructuracion 
    let total = 0;
    /*
    options.products.forEach( item =>{  // accediendo al parametro y a los productos almacenados
        total += item.price;  // sumando de los productos su precio
    });*/

    products.forEach( ({price}) =>{  // accediendo al precio directamente
        total += price;  // sumando de los productos su precio
    });

    return [total, total * tax];  // retona un number de el total y el total con el impuesto
}

const shoppingCart = [phone, tablet]; // crear el carrito con los productos 
const tax = 0.15;  // creamos la variable tax con su valor

// guardamos el resultado de la funcion con los parametros del carrito y el valor del tax
const result = taxCalculation({products: shoppingCart, tax: tax})

console.log('Total: ', result[0]);
console.log('Total with Tax: ', result[1]);

// Desestructuracion 
const [total, taxTotal] = taxCalculation({products:shoppingCart, tax:tax}) 
console.log('Total: ', total);
console.log('Total with Tax: ', taxTotal);


