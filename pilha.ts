const ler = require("readline-sync");
import { Stack } from "./stackMetodos";

let opcao;
const pilha = new Stack();

do {
  console.log("\n******** MENU ********");
  console.log("1 - Adicionar Livro");
  console.log("2 - Listar Livros");
  console.log("3 - Retirar Livro");
  console.log("0 - Sair");
  console.log("**********************");

  opcao = ler.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      const nome = ler.question("Digite o nome do livro: ");
      pilha.push(nome);
      console.log("Livro adicionado!");
      break;

    case 2:
      console.log("\nLivros na pilha:");
      pilha.printStack();
      break;

    case 3:
      if (pilha.isEmpty()) {
        console.log("A pilha já está vazia!");
      } else {
        pilha.pop();
        console.log("Livro removido!");
      }
      break;

    case 0:
      console.log("Saindo do programa...");
      break;

    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);
