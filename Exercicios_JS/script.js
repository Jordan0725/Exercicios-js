
function separaParImpar(nums) {

    const pares = [];
    const impares = [];
  
    let indicePares = 0;
    let indiceImpares = 0;
  
    for (let i = 0; i < nums.length; i++) {
      const numeroAtual = nums[i]; 

      if (numeroAtual % 2 === 0) {

        pares[indicePares] = numeroAtual;
        indicePares++;
      } else {

        impares[indiceImpares] = numeroAtual;
        indiceImpares++;
      }
    }

    return [pares, impares];
  }
  