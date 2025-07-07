const ler = require("readline-sync");
import { Queue } from "./queueMetodos";

const fila = new Queue<string>();

while (true) {
  console.log("\nDigite uma opção:");
  console.log("1 - Adicionar Cliente");
  console.log("2 - Listar Clientes");
  console.log("3 - Chamar Cliente");
  console.log("0 - Sair");

  let opcao = ler.questionInt("-> ");
  let continua: string = "";

  switch (opcao) {
    case 1: {
      const nome = ler.question("Digite o nome: ").trim();
      if (nome) {
        fila.enqueue(nome);
        console.log("Cliente Adicionado!\n");
      }
      break;
    }

    case 2:
      console.log("Lista de Clientes na Fila:");
      fila.printQueue();
      break;

    case 3: {
      if (fila.isEmpty()) {
        console.log("\nA Fila está vazia!\n");
      } else {
        fila.dequeue();
        console.log("O Cliente foi Chamado!\n");
      }
      break;
    }

    case 0:
      console.log("\nPrograma Finalizado!");
      process.exit(0);

    default:
      console.log("Opção inválida!\n");
  }
  continua = ler.question("Digite 's' para continuar: ").toLowerCase();
}
