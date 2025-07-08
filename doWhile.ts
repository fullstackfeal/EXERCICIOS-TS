import readlineSync from "readline-sync";

let numero: number;
let somaPositivos: number = 0;

do {
  numero = readlineSync.questionInt("Digite um número: ");

  if (numero > 0) {
    somaPositivos += numero;
  }
} while (numero !== 0);

console.log(`\nA soma dos números positivos é: ${somaPositivos}`);
