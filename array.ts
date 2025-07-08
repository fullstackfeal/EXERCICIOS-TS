import readlineSync from "readline-sync";

const cores: string[] = [];

for (let i = 0; i < 5; i++) {
  const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
  cores.push(cor);
}

console.log("\nListar todas as cores:");
cores.forEach((cor) => console.log(cor));

console.log("\nOrdenar as cores:");
const coresOrdenadas = [...cores].sort((a, b) => a.localeCompare(b));
coresOrdenadas.forEach((cor) => console.log(cor));
