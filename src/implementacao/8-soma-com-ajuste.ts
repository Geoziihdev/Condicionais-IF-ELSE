/* # Soma com ajuste
Construir um algoritmo que leia dois números e efetue a adição. Caso o valor somado seja maior que 20, 
este deverá ser apresentado somando-se a ele mais 8; caso o valor somado seja menor ou igual a 20, 
este deverá ser apresentado subtraindo-se 5. */
function somaComAjuste(A: number, B: number): string {
    // Calcula a soma dos números
    let soma = A + B;

    // Verifica se a soma é maior que 20
    if (soma > 20) {
        // Adiciona 8 ao resultado
        return `O resultado é maior que 20, e (${soma} + 8) = ${soma + 8}`;
    } else {
        // Subtrai 5 do resultado
        return `O resultado é menor ou igual a 20, e (${soma} - 5) = ${soma - 5}`;
    }
}

// Testes
console.log(somaComAjuste(12, 15)); // O resultado é maior que 20, e (27 + 8) = 35
console.log(somaComAjuste(8, 9));   // O resultado é menor ou igual a 20, e (17 - 5) = 12
