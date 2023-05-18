import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
/* Spread - Rest */

/* Rest (...) */

const operadorRest = (...rest) => {
    rest.forEach((elemento) => {
        console.log(elemento);
    });
}

operadorRest('uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez');

const operadorSpread = (spread) => {
    console.log(...spread);
}

const arregloPalabrasNumeros = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];
console.log(arregloPalabrasNumeros);
operadorSpread(arregloPalabrasNumeros);

const leerArchivo = nombreArchivo => parse(readFileSync(`${nombreArchivo}.csv`, 'utf-8'));

console.log(leerArchivo('datosUno'));
console.log(leerArchivo('datosDos'));

const fomarArreglos = (...arreglos) => {
    arreglos = [...arreglos[0], ...arreglos[1]];
    console.log(arreglos);
}

fomarArreglos(leerArchivo('datosUno')[0], leerArchivo('datosDos')[0]);

