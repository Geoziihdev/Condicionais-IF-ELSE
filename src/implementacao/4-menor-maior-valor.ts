/*# Menor e maior valor
Construa um algoritmo que imprima qual o menor e qual o maior valor de dois números A e B, lidos através do teclado.*/

function determinarMenorMaior(A: number, B: number): string{
    if (A > B) {
        return `O valor de A (${A}) é maior que o de B (${B})`;  
    } else if (B > A) {
        return `O valor de B (${B}) é maior que A (${A})`;  
    } else {
        return `Os valores são iguais: (${A}) e (${B})`;  
    }   
}

// Exemplo de chamada
determinarMenorMaior(5, 10); 
console.log(determinarMenorMaior(5, 10)); // Maior: 10, Menor: 5
console.log(determinarMenorMaior(10, 5)); // Maior: 10, Menor: 5
console.log(determinarMenorMaior(5, 5));  // Os números são iguais.