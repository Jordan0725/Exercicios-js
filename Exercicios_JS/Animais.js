const animais = ["leão", "tigre", "elefante", "girafa", "macaco"];

function contarElementosArray(arr) {
	let contador = 0;

	for (let i = 0; i < arr.length; i++) {
		contador++;
	}

	return contador;
}

const numeroDeAnimais = contarElementosArray(animais);

console.log("Array de animais:", animais);
console.log("Número de elementos no array de animais:", numeroDeAnimais);
