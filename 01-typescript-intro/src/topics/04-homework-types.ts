/*
    ===== Código de TypeScript =====
*/
// Interfaz dentro de otra Interfza -----------------------------------------------------
interface SuperHero {
    name: string,
    age: number,
    address: Address,  // Implementar una interfaz en una propiedad de otra interfaz
    showAddress: () => string
}

interface Address {
    street: string,
    country: string,
    city: string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',  // Para cambiar el nombre de muchas variables es con F2 sobre la variable
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};