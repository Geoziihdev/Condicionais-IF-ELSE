/* # Empréstimo com base no salário
A prefeitura de Contagem abriu uma linha de crédito para os funcionários estatutários. 
O valor máximo da prestação não poderá ultrapassar 30% do salário bruto. 
Fazer um algoritmo que permita entrar com o salário bruto e o valor da prestação, e informar se o empréstimo pode ou não ser concedido. */

function verificarEmprestimo(salarioBruto: number, valorPrestacao: number): string {
    let limitePrestacao = salarioBruto * 0.30;

    if (valorPrestacao <= limitePrestacao) {
        return "Empréstimo Concedido";
    } else {
        return "Empréstimo NÃO pode ser concedido";
    }
}

// Exemplo de uso
console.log(verificarEmprestimo(5000, 1000));  
console.log(verificarEmprestimo(5000, 2000));  
