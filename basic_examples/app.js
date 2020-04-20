/*
let nombre = prompt('cual es tu nombre');
let edad = prompt('cual es tu edad');
document.getElementById('equisde').innerHTML = `bienvenido ${nombre} y ${edad}`;
*/

// ejemplo de una destructuring
const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

const {bread, meat} = sandwich;

console.log(bread, meat);

// el mismo ejemplo pero con funciones flecha
const regularPerson = {
    firstname: 'sebastian',
    lastname: 'lopez'
}

const lordify = ({firstname}) => {
    console.log(`${firstname} of Canterbury`)
};

lordify(regularPerson);

// destructuring tambien puede ser aplicado a los arreglos
const arregloDeValores = ['uno', 'dos', 'tres'];
const [primerValor] = arregloDeValores;
const [, , tercerValor] = arregloDeValores;

console.log(primerValor, tercerValor)

// object literal enhancement
let propiedad1 = 'asd', propiedad2 = 3;
let print = function () {
    console.log(this.propiedad1 + this.propiedad2)
}
let objetoNuevo = {propiedad1, propiedad2, print};

objetoNuevo.print();

var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]

console.log(tahoe.join(', '))

var [last] = [...peaks].reverse()

console.log(last)


// jugando con funciones flecha
const variable_hechiza = err => console.log('equisde');

variable_hechiza('asd');

// orientacion a objetos
class vacaciones {
    constructor(ciudad, pais) {
        this.ciudad = ciudad;
        this.pais = pais;
    }

    impresion() {
        console.log(`${this.ciudad} del pais ${this.pais}`)
    }
}

let instanciaVacaciones = new vacaciones('santiago', 'chile');
instanciaVacaciones.impresion();


let nonUniqueArray = [10, 9, 10, 10, 9, 8];
const nonUniques = nonUniqueArray.filter(numero => nonUniqueArray.indexOf(numero) !== nonUniqueArray.lastIndexOf(numero));
console.log(nonUniques);

// high-order functions

const userLogs = userName => message => tercerParametro => console.log(`${userName} -> ${message} -> ${tercerParametro}`);
const log = userLogs('primero');
const terceraFunc = log('segundo_param');
console.log(terceraFunc('tercer_parametro'));

const funcionExtraña = () => 1000;
console.log(funcionExtraña('asd'));

