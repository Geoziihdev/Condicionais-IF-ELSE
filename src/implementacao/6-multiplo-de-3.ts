/* # Múltiplo de 3
Escreva um algoritmo que receba um número e imprima uma das mensagens: "é múltiplo de 3" ou "não é múltiplo de 3". */
function verificarMultiploDe3(numero:number): string {
    if (numero % 3 === 0) {
        return `O (${numero}) É múltiplo de 3`;
    } else {
        return `O (${numero}) NÃO É múltiplo de 3`; 
    }
    
}


// Testes
console.log(verificarMultiploDe3(9));   
console.log(verificarMultiploDe3(7));   