import readlineSync from 'readline-sync';

const valoresIniciais = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const numeros = new Set<number>(valoresIniciais);

console.log('Índices:');
for (let i = 0; i < valoresIniciais.length; i++) {
  process.stdout.write(i.toString().padEnd(3)); 
}
console.log('\nValores:');
valoresIniciais.forEach((v) => process.stdout.write(v.toString().padEnd(3)));

const procurar = readlineSync.questionInt('\n\nDigite o número que você deseja encontrar: ');

if (numeros.has(procurar)) {
  console.log(`\nO número ${procurar} foi encontrado!`);
} else {
  console.log(`\nO número ${procurar} não foi encontrado!`);
}
