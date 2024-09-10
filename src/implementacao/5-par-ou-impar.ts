/*# Par ou ímpar
Construa um algoritmo que determine (imprima) se um dado número N inteiro, recebido através do teclado, é PAR ou ÍMPAR.*/

function verificarParOuImpar(N: number): string {
    if (N % 2 === 0) {
        return `O número (${N}) é PAR`;
    } else {
        return `O número (${N}) é IMPAR`;
    }
 
}


// Testes
console.log(verificarParOuImpar(4));   // Deve retornar "O número (4) é PAR"
console.log(verificarParOuImpar(7));   // Deve retornar "O número (7) é ÍMPAR"


