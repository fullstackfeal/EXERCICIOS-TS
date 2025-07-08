import readlineSync = require("readline-sync");

let menor21 = 0;
let maior50 = 0;

function lerIdade() {
  while (true) {
    const resposta = readlineSync.question("Digite uma idade (negativa para sair): ");
    const idade = Number(resposta);

    if (idade < 0) {
      break;
    }

    if (idade < 21) menor21++;
    if (idade > 50) maior50++;
  }

  console.log(`\nMenores de 21 anos: ${menor21}`);
  console.log(`Maiores de 50 anos: ${maior50}`);
}

lerIdade();

