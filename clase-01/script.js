// Funciones

// Funciones declaradas

function llevoParaguas1() {
    console.log('Si llevalo');
}

// Funciones anónimas

const llevoParaguas2 = function () {
    console.log('Si llevalo');
}

const llevoParaguas3 = () => {
    console.log('Si llevalo');
}

llevoParaguas1(); // Si llevalo

llevoParaguas2(); // Si llevalo

llevoParaguas3(); // Si llevalo

// Condicionales

const llevoParaguas4 = () => {
    let clima = "lluvioso";

    if (clima === "lluvioso")
        console.log('Si llevalo');
    else
        console.log('No hace falta')
}

llevoParaguas4(); // Si llevalo

// Ternario

const llevoParaguas5 = () => {
    let clima = "soleado";

    clima === "lluvioso" ?
        console.log('Si llevalo') :
        console.log('No hace falta')
}

llevoParaguas5(); // No hace falta

// Operadores Lógicos (&&, ||, <, >)

// Operador && (AND lógico)

/*
    El operador && retorna el último
    valor verdadero o el primero falso

    "perro" && "casa" -> "casa"

    0 && "casa" -> 0

    1 && "casa" -> "casa"
*/
const llevoParaguas6 = () => {
    let clima = "lluvioso";

    console.log(clima === 'lluvioso' && 'Si llevalo');
}

llevoParaguas6(); // Si llevalo

// Desestructuración o destructuración

// En objetos

let persona = {
    nombre: 'Jorge',
    apellido: 'Duje',
    edad: 30
}

console.log(persona.nombre); // Jorge

const {nombre, apellido, edad} = persona;

console.log(apellido); // Duje

// En arrays

let nombres = ["pepito", "maria", "juancito"];

console.log(nombres[0]); // pepito
console.log(nombres[1]); // maria
console.log(nombres[2]); // juancito

// No importa el nombre de la variable, pero si la posición.
let [persona1, persona2, persona3] = nombres;

console.log(persona1); // pepito
console.log(persona2); // maria
console.log(persona3); // juancito

// Con arrays de objetos

let personas = [{
    nombre: "Facundo",
    apellido: "Wade"
}, {
    nombre: "Lionel",
    apellido: "Messi"
}];

let [{nombre: nombre1, apellido: apellido1}, {nombre: nombre2, apellido: apellido2}] = personas;

console.log(nombre1);   // Facundo
console.log(apellido1); // Wade
console.log(nombre2);   // Lionel
console.log(apellido2); // Messi

// Valores primitivos y de objetos
// Asignaciones por valor y por referencia

let a = 5;
let b = a;

b = 3;

console.log(a); // 5
console.log(b); // 3

let persona4 = {
    nombre: 'Ricardo',
    apellido: 'Fort',
    edad: 30
};

let persona5 = persona4;

persona4.nombre = 'Felipe';

console.log(persona4.nombre); // Felipe
console.log(persona5.nombre); // Felipe
// Cómo vemos cambia el nombre del nuevo objeto también

// Operador spread en objetos

persona4.nombre = 'Ricardo';

let persona6 = {...persona4};

persona4.nombre = 'Felipe';

console.log(persona4.nombre); // Felipe
console.log(persona6.nombre); // Ricardo

// Ahora no cambió el valor, ya que con el spread
// estamos creando un nuevo objeto

// Operador spread en arrays

let numeros = [12, 43, 5];

let numerosNuevos = [...numeros];

numeros.push(77);

console.log(numeros);       // 12, 43, 5, 77
console.log(numerosNuevos); // 12, 43, 5

// Usando el spread, si agregamos valores nuevos
// al array original, no se agrega al nuevo

numeros = [12, 43, 5];

let numeros2 = numeros;

numeros.push(77);

console.log(numeros);  // 12, 43, 5, 77
console.log(numeros2); // 12, 43, 5, 77

// Si solamente hacemos una asignación
// si se agrega al nuevo

// Métodos de arrays

// MAP