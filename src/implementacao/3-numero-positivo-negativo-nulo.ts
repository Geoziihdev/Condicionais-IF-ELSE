/*# Número positivo, negativo ou nulo
Escreva um algoritmo para determinar se um dado número N, recebido através do teclado, é POSITIVO, NEGATIVO ou NULO.*/

function verificarNumero(N: number): string {
if (N > 0) {
    console.log("POSITIVO");
    return "POSITIVO";
} else if (N < 0) {
    console.log("NEGATIVO");
    return "NEGATIVO";
} else {
    console.log("NULO");
    return "NULO";
}    
    
}

// Exemplo de chamada
verificarNumero(10);  // POSITIVO
verificarNumero(-5);  // NEGATIVO
verificarNumero(0);   // NULO
