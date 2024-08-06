import promptSync from "prompt-sync";
import { Cadastro } from "./cadastro.js";
import { dataFilmes } from "./filme.js";
import { dataSeries } from "./series.js"; 
const prompt = promptSync();

export class Menu {
  constructor() {
    this.cadastro = new Cadastro();
    this.dataFilmes = dataFilmes; 
    this.dataSeries = dataSeries; 
  }

  mostrarMenu() {
    let escolha;
    do {
      console.log("\n--- Menu ---");
      console.log("1 - Login");
      console.log("2 - Cadastro");
      console.log("3 - Sair");
      escolha = prompt("Escolha uma opção: ");

      switch (escolha) {
        case "1":
          this.login();
          break;
        case "2":
          this.cadastrarUsuario();
          break;
        case "3":
          console.log("Saindo...");
          break;
        default:
          console.log("Opção inválida, tente novamente.");
      }
    } while (escolha !== "3");
  }

  cadastrarUsuario() {
    console.log("\n--- Cadastro de Clientes ---");
    const nome = prompt("Nome: ");
    const email = prompt("Email: ");
    const senha = prompt("Senha: ");
    this.cadastro.cadastrarData(nome, email, senha);
    console.log("Usuário cadastrado com sucesso!");
  }

  login() {
    console.log("\n--- Login de Clientes ---");
    const email = prompt("Email: ");
    const senha = prompt("Senha: ");

    const usuario = this.cadastro.acharUsuario(email);

    if (usuario) {
      const resultadoLogin = usuario.loginData(email, senha);
      console.log(resultadoLogin);

      if (resultadoLogin == "Login efetuado com sucesso") {
        let escolha;
        do {
          console.log("\n--- Menu ---");
          console.log("1. Ver Filme");
          console.log("2. Ver Série");
          console.log("3. Compartilhar");
          console.log("4. Logout");
          escolha = prompt("Selecione uma opção: ");

          switch (escolha) {
            case "1":
              this.assistirFilme();
              break;
            case "2":
              this.assistirSerie();
              break;
            case "3":
              this.compartilhar();
              break;
            case "4":
              console.log("Deslogando...");
              break;
            default:
              console.log("Opção inválida, tente novamente.");
          }
        } while (escolha !== "4");
      }
    } else {
      console.log("Usuário não encontrado. Faça o cadastro primeiro.");
    }
  }

  assistirFilme() {
    console.log("\n--- Assistir Filme ---");
    this.mostrarMenuFilmes();
    const escolha = prompt("Escolha o filme pelo número: ");

    if (escolha >= 1 && escolha <= this.dataFilmes.length) {
      const filmeSelecionado = this.dataFilmes[escolha - 1];
      console.log(`Você está assistindo ao filme: ${filmeSelecionado.nome}`);
      console.log(filmeSelecionado.assistir());
    } else {
      console.log("Opção inválida.");
    }
  }

  assistirSerie() {
    console.log("\n--- Assistir Série ---");
    this.mostrarMenuSeries();
    const escolha = prompt("Escolha a série pelo número: ");

    if (escolha >= 1 && escolha <= this.dataSeries.length) {
      const serieSelecionada = this.dataSeries[escolha - 1];
      console.log(
        `Você está assistindo à série: ${serieSelecionada.nomeSerie}`
      );
      console.log(serieSelecionada.assistir());
    } else {
      console.log("Opção inválida.");
    }
  }

  compartilhar() {
    console.log("\n--- Compartilhar ---");
    const escolha = prompt("Escolha o tipo de mídia (1. Filme / 2. Série): ");

    switch (escolha) {
      case "1":
        this.mostrarMenuFilmes();
        const opcaoFilme = prompt("Escolha o filme pelo número: ");
        if (opcaoFilme >= 1 && opcaoFilme <= this.dataFilmes.length) {
          const filmeSelecionado = this.dataFilmes[opcaoFilme - 1];
          console.log(filmeSelecionado.compartilhar());
          console.log("Compartilhado com sucesso!");
        } else {
          console.log("Opção inválida.");
        }
        break;
      case "2":
        this.mostrarMenuSeries();
        const opcaoSerie = prompt("Escolha a série pelo número: ");
        if (opcaoSerie >= 1 && opcaoSerie <= this.dataSeries.length) {
          const serieSelecionada = this.dataSeries[opcaoSerie - 1];
          console.log(serieSelecionada.compartilhar());
          console.log("Compartilhado com sucesso!");
        } else {
          console.log("Opção inválida.");
        }
        break;
      default:
        console.log("Opção inválida.");
    }
  }

  mostrarMenuFilmes() {
    console.log("\n--- Lista de Filmes ---");
    this.dataFilmes.forEach((filme, index) => {
      console.log(`${index + 1}. ${filme.nome}`);
    });
  }

  mostrarMenuSeries() {
    console.log("\n--- Lista de Séries ---");
    this.dataSeries.forEach((serie, index) => {
      console.log(`${index + 1}. ${serie.nomeSerie}`);
    });
  }
}

const menu = new Menu();
menu.mostrarMenu();
