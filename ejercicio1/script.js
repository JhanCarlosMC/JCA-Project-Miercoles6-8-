//Variables
let contador = 0;
const LIMITE_MAX = 10;
const LIMITE_MIN = -10;

//Elementos del DOM
const contadorElement = document.getElementById("contador");
const incrementarBtn = document.getElementById("incrementar");
const decrementarBtn = document.getElementById("decrementar");
const reiniciarBtn = document.getElementById("reset");
const mensajeElement = document.getElementById("mensaje");

//Funcion para incrementar
function incrementar(){
	if(contador < LIMITE_MAX){
		contador++;
		actualizarContador();
	}
}

//Funcion para decrementar
function decrementar(){
	if(contador > LIMITE_MIN){
		contador--;
		actualizarContador();
	}
}

//Funcion para reiniciar
function reiniciar(){
	contador = 0;
	actualizarContador();
}

incrementarBtn.addEventListener("click",incrementar);
decrementarBtn.addEventListener("click",decrementar);
reiniciarBtn.addEventListener("click",reiniciar);

function actualizarContador(){
    contadorElement.textContent = contador;

    if(contador === LIMITE_MAX){
        mensajeElement.textContent = "Limite maximo alcanzado";
        mensajeElement.className = "limite";
    }else if(contador === LIMITE_MIN){
        mensajeElement.textContent = "Limite minimo alcanzado";
        mensajeElement.className = "limite";
    }else if(contador === 0){
        mensajeElement.textContent = "Contador en cero";
        mensajeElement.className = "normal";
    }else{
        mensajeElement.textContent = "";
        mensajeElement.className = "";
    }
}

document.addEventListener("keydown",function(event){
    console.log(event.key);
    console.log(event);
    if(event.key === "ArrowUp"){
	    incrementar();
    }else if(event.key ==="ArrowDown") {
	    decrementar();
    }else if(event.key === " "){
	    reiniciar();
    }
});