/* THIS
* La palabra reservada 'this' puede tener los siguientes valores:
* valor global, objeto, contexto de una función (también en estricto), llamadas a través de métodos call y apply.


/* Valor global */

console.log(this);

// Objeto propietario

const obj = {
  prop: 'Hola',
  getProp: function() {
    console.log(this.prop); 
  }
};

obj.getProp(); 

// contexto de función

let profesor = {
    name: "Lucas",
    greeting: () => {
        console.log(`Hola, soy el profesor ${this.name}`);
    }
}
profesor.greeting();

// estricto

'use strict';
function miFuncionEstricta () {
    console.log(this);
}
miFuncionEstricta();

// call() y apply()

const persona = {
    name: 'Javier'
};

function greet() {
    console.log(`Hola, ${this.name}!`);
}


greet.call(persona);


