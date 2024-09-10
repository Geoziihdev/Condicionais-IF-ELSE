/* # Ordem ascendente
Dados três valores A, B e C, construa um algoritmo que mostre os valores de forma ascendente (do menor para o maior). */ 


function ordenarAscendente(A: number, B: number, C: number):number [] {
let maior: number = 0
let menor: number = 0 
let medio: number = 0

    if (A <= B && A <= C) {

        menor = A;
        if (B < C) {
          maior = C;
          medio = B;
        } else {
          maior = B;
          medio = C;
        }
      } else if (B <= A && B <= C) {
        menor = B;
        if (A < C) {
          maior = C;
          medio = A;
        } else {
          maior = A;
          medio = C;
        }
      } else if (C <= B && C <= A) {
        menor = C;
        if (A < B) {
            maior = B;
            medio = A;           
        }  else {
            maior = A;
            medio = B;
        }

      }

    return [menor, medio, maior];
}

console.log(ordenarAscendente(32, 9, 500));

