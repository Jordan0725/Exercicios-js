function separaParImpar(nums) {
	let resultado = [[], []];

	let indicePares = 0;
	let indiceImpares = 0;

	for (let i = 0; i < nums.length; i++) {
		const numero = nums[i];

		if (numero % 2 === 0) {
			resultado[0][indicePares] = numero;

			indicePares++;
		} else {
			resultado[1][indiceImpares] = numero;
			indiceImpares++;
		}
	}

	return resultado;
}

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8];
const arraySeparado = separaParImpar(meuArray);

console.log(arraySeparado);
