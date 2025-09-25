//Solicita un número n y genera en consola los 
//primeros n términos de la secuencia de Fibonacci.

// 0 1 1 2 3 5 8 13 21 34 ...

function calcular_fibonacci(n){
	let termino_uno = 0; //Inicialiacion
	let termino_dos = 1;
	
	if(n === 1){
		console.log(termino_uno);
	}else if(n === 2){
		console.log(termino_uno);
		console.log(termino_dos);
	}else{
		console.log(termino_uno);
		console.log(termino_dos);
		let index = 3;
		while(index <= n){
			let termino_tres = termino_uno + termino_dos;
			console.log(termino_tres);
			
			termino_uno = termino_dos;
			termino_dos = termino_tres;
			index++;
		}
	}
}

function fibonacciV2(n){
	let termino_uno = 0; //Inicialiacion
	let termino_dos = 1;
	if(n > 0){ console.log(termino_uno); }
	if(n > 1){ console.log(termino_dos); }
	if(n > 2){
		for(let i = 3; i <= n; i++){
			let termino_tres = termino_uno + termino_dos;
			console.log(termino_tres);
			termino_uno = termino_dos;
			termino_dos = termino_tres;
		}
	}
}
module.exports = {fibonacciV2, calcular_fibonacci}