/* # Divisível por outro número
Escreva um algoritmo para determinar se um número A é divisível por um outro número B. 
Esses valores devem ser fornecidos pelo usuário.*/
function verificarDivisivel(A: number, B: number): string {
    if  (A % B === 0) {
      return `(${A}) é divisível por (${B})`;  
    } else {
        return `(${A}) NÃO é divisível por (${B})`;  
    }
   
}





// Testes
console.log(verificarDivisivel(4,2));  // 4 é divisível por 2
console.log(verificarDivisivel(7, 3));   // 7 NÃO é divisível por 3
console.log(verificarDivisivel(10, 0));  // Não é possível dividir por zero