/* # Maior e menor valor de quatro números
Construa um algoritmo que, dado quatro valores, A, B, C e D, o algoritmo diga qual é o maior e o menor valor.*/

function encontrarMaiorEMenor(a: number, b: number, c: number, d: number): { maior: number, menor: number } {
    
    let maior = Math.max(a, b, c, d);
    
   
    let menor = Math.min(a, b, c, d);

    
    return { maior, menor };
}
const resultado1 = encontrarMaiorEMenor(10, 20, 5, 15);
console.log(`Entre os números 10, 20, 5 e 15:`);
console.log(`O maior valor é ${resultado1.maior}.`);
console.log(`O menor valor é ${resultado1.menor}.`);

const resultado2 = encontrarMaiorEMenor(-5, -10, -3, -8);
console.log(`Entre os números -5, -10, -3 e -8:`);
console.log(`O maior valor é ${resultado2.maior}.`);
console.log(`O menor valor é ${resultado2.menor}.`);



/* function determinarMaiorMenorDeQuatro(A: number, B: number, C: number, D: number): string {
    // Inicializa `maior` e `menor` com o valor de A
    let maior = A;
    let menor = A;
    
    // Compara B com o maior e menor valor
    if (B > maior) {
        maior = B;
    }
    if (B < menor) {
        menor = B;
    }

    // Compara C com o maior e menor valor
    if (C > maior) {
        maior = C;
    }
    if (C < menor) {
        menor = C;
    }

    // Compara D com o maior e menor valor
    if (D > maior) {
        maior = D;
    }
    if (D < menor) {
        menor = D;
    }

    // Retorna a string com o maior e menor valor
    return `O maior valor é ${maior} e o menor valor é ${menor}.`;
}

// Testes
console.log(determinarMaiorMenorDeQuatro(5, 12, -3, 9));  // O maior valor é 12 e o menor valor é -3.
console.log(determinarMaiorMenorDeQuatro(7, 7, 7, 7));   // O maior valor é 7 e o menor valor é 7.
console.log(determinarMaiorMenorDeQuatro(-10, -5, 0, 3)); // O maior valor é 3 e o menor valor é -10. */

