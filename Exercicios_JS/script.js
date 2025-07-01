
function separaParImpar(nums) {
  
  let resultado = [[], []];

  for (const numero of nums) {

    if (numero % 2 === 0) {
      resultado[0].push(numero);
    } else {
      resultado[1].push(numero);
    }
  }

  return resultado;
}


const array = [10, 21, 32, 43, 54, 65];
const arrayFinal = separaParImpar(array);

console.log(arrayFinal); 