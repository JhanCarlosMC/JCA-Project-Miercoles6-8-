//Conceptos Inciales JS
// ---------- Variables ---------
// Declaracion -> Existencia/Creacion del elemento
// Asignacion -> Darle valor a un elemento ya creado
// Inicializacion -> Declaracion y Asignacion en la misma linea
//TipoVariable NombreVariable = ValorVariable;
let x; //Declaracion
x = 10; // Asignacion
const pi = 3.1416; // Inicializacion

// ------------ Tipos de Datos ----------------
// Numericos -> Number (10 1.0 -10 -10.0)
let num = 10;

// Cadenas de Texto -> String ("Hola Mundo" 'Hola Mundo')
let cadena = "Hola";

// Logicos -> Boolean (True False)
let logico = true;
let logico2 = false;

// Objetos -> Object (Un elemento que cuenta con caracteristicas y comportamiento)
//              persona = {nombre: "Jhan", edad: 24}
let computador = {marca: "hp", cpu: "i7", ram:"16GB"}

// Arreglos -> Array (Un conjunto de elementos)
//              edades = [20,24,18,19]
let edades = [20,24,18,19];

// Nulo -> Null (Elemento vacio)
let nulo = null;

// Indefinido -> Undefined (Variable que no ha sido asignada)
let indefinido;

let id = "12121";
id = "hola";
const id2 = "121211";
// id2 = "Adios";

// ---------------- Operadores ----------------
//Aritmeticos
let suma = 2+2;
let resta = 2-1;
let multiplicacion = 2*2;
let division = 2/2;
let modulo = 2%2;

//Relaciones
let igual = 2=="2";
let igualdadEstricta = 2==="2";
let diferente = 2!=2;
let mayor = 2>2;
let mayorIgual = 2>=2;
let menor = 2<2;
let menorIgual = 2<=2;

//Logicos
let and = true && true;
let or = true || false;
let not = !true;


// ------------- Estructura de Control -------------
//IF
// if(condicion){
//  //Codigo en cado de que la condicion sea TRUE
// }

// if(2>3){
//     console.log("Condicion verdadera");
// }

// //if-else
// if(2>3){
//     console.log("Condicion verdadera");
// }else{
//     console.log("Condicion falsa");
// }

// if(edad >= 18 && nombre == "Jhan" || nombre != "Aaron"){
//     console.log("Es mayor de edad");
// }


// //If anidados
// if(true){
//     if(true){
//         console.log("Condicion verdadera");
//     }else{
//         console.log("Condicion falsa");
//     }
// }

// if(false){
//     console.log("Condicion verdadera");
// }else if(true){
//     console.log("Condicion verdadera if anidado");
// }else{
//     console.log("Condicion falsa");
// }

// ------------- Estructuras Ciclicas/Repeticion -------------
// Inicio - Condicion de Parada - Incremento
//For
console.log("Ejecucion For");
for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("Ejecucion While");
//While
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

console.log("Ejecucion Do-While");
//Do-while
i = 1;
do{
    console.log(i);
    i++;
}while(i<=10);
