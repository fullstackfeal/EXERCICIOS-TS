import readlineSync = require("readline-sync");

function promptInt(message: string): number {
  return readlineSync.questionInt(message);
}
function findMultiplesInRange(start: number, end: number): number[] {
  const multiples: number[] = [];
  const LCM = 15; 

  for (let i = start; i <= end; i++) {
    if (i % LCM === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

function main(): void {
  const first = promptInt('Digite o primeiro número do intervalo: ');
  const last = promptInt('Digite o último número do intervalo: ');

  if (first >= last) {
    console.log('\nIntervalo inválido!');
    return;
  }

  console.log(`\nNo Intervalo entre ${first} e ${last}:\n`);

  const multiples = findMultiplesInRange(first, last);

  if (multiples.length === 0) {
    console.log('Não há números múltiplos de 3 e 5 nesse intervalo.');
    return;
  }

  for (const num of multiples) {
    console.log(`${num} é múltiplo de 3 e 5`);
  }
}

main();
