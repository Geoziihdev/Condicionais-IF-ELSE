/* # Soma maior que 50
Construa um algoritmo que leia dois valores numéricos inteiros e efetue a adição; 
caso o resultado seja maior que 50, mostre o resultado da soma.*/

function somaMaiorQueCinquenta(n1: number, n2: number): number {
    // Calcular a soma
    let soma: number = n1 + n2;

    // Verificar se a soma é maior que 50
    if (soma > 50) {
        console.log(`A soma é ${soma}, que é maior que 50.`);
    } else {
        console.log(`A soma é ${soma}, que não é maior que 50.`);
    }

    // Retorna a soma para outros possíveis usos
    return soma;
}

// Chamando a função com valores de exemplo
somaMaiorQueCinquenta(30, 25); // A soma é 55, que é maior que 50.
somaMaiorQueCinquenta(10, 20); // A soma é 30, que não é maior que 50.
