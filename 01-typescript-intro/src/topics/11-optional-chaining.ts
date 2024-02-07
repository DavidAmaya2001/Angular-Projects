// Encadenamiento opcional ---------------------------------------------------------------

export interface Passenger {
    name:string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Potaxio',
}

const passenger2: Passenger = {
    name: 'Tilin',
    children: ['El pepe', 'Ete sech'],
}

// encadenamiento opcional
const returnChildrenNumber = (passenger: Passenger):number =>{  // la funcion flecha recibe de argumento un objeto pasajero
    const howManyChildren = passenger.children?.length || 0;  // si tiene datos en la propiedad que imprima el length del array si es undefined que asigne 0
    //const howManyChildren = passenger.children.length  // el signo ! le confirma a JS que siempre recibira el parametro
    //const howManyChildren = passenger.children?.length // el signo ? le permite a JS si el valor puede estar presente o ser indefinido



    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger1);  // se le proporciona el argumento