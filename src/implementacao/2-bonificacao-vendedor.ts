/*# Bonificação para o vendedor
Escreva um algoritmo que leia o valor unitário e a quantidade vendida de um produto e apresente o valor total da venda. 
Caso o valor total da venda seja superior a R$100,00, mostrar a mensagem "Bonificação de 10% para o vendedor!".*/

function calcularBonificacao(valorUnitario: number, qtoVendidas:number): number {

//calcular valor total
let valorTotal: number = valorUnitario * qtoVendidas;

if (valorTotal>100) {
    console.log(`Bonificação de 10% para o vendedor!`);
    
} 
    return valorTotal;
}

//chamando valores de exemplo
/*calcularBonificacao(100,2);*/

let valorFinal = calcularBonificacao(100, 2);
console.log(`Valor final da venda: R$${valorFinal}`);

