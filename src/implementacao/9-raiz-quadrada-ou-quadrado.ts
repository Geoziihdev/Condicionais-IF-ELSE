/* # Raiz quadrada ou quadrado
Escreva um algoritmo que leia um número e imprima a raiz quadrada do número, 
caso ele seja positivo ou igual a zero; e o quadrado do número, caso ele seja negativo.*/

function raizQuadradaOuQuadrado(num: number): string {
    if (num >= 0) {
        // Se o número for positivo ou zero, calcula e retorna a raiz quadrada
        const raizQuadrada = Math.sqrt(num); //Função que calcula a raiz quadrada de um número.
        return `O número ${num} é positivo ou zero, e a raiz quadrada dele é: ${raizQuadrada}`;
    } else {
        // Se o número for negativo, calcula e retorna o quadrado
        const quadrado = num * num;
        return `O número ${num} é negativo, e o quadrado dele é: ${quadrado}`;
    }
}

// Exemplo de uso
console.log(raizQuadradaOuQuadrado(16));  // O número 16 é positivo ou zero, e a raiz quadrada dele é: 4
console.log(raizQuadradaOuQuadrado(-4));  // O número -4 é negativo, e o quadrado dele é: 16
console.log(raizQuadradaOuQuadrado(0));   // O número 0 é positivo ou zero, e a raiz quadrada dele é: 0



