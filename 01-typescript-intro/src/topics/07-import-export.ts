// Importaciones y Exportaciones -------------------------------------------------------

// Importacion del producto
import {Product, taxCalculation} from './06-function-destructuring'

// Se define una constante de tipo arreglo de productos y se le pasa un arreglo de objetos
const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 550
    }
];

// Al hacer importaciones se importa todo el archivo de donde proviene
// solo deben ser como funciones, const, o interfaces
const [total, taxTotal] = taxCalculation({products:shoppingCart, tax: 0.15});

console.log('Total ', total);
console.log('Tax: ', taxTotal );