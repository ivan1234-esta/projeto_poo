import promptSync from "prompt-sync";
import { Cadastro } from "./cadastro.js";
import { vetorFilmes } from "./filme.js";
import { vetorSeries } from "./series.js"; 
const prompt = promptSync();

export class Menu {
  constructor() {
    this.cadastro = new Cadastro();
    this.vetorFilmes = vetorFilmes; 
    this.vetorSeries = vetorSeries; 
  }

  mostrarMenu() {
    const opcao;
    do {
      console.log("\n--- Menu ---");
      console.log("1 - Login");
      console.log("2 - Cadastro");
      console.log("3 - Sair");
      opcao = prompt("Escolha uma opção: ");

      switch (opcao) {
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
    } while (opcao !== "3");
  }

  cadastrarUsuario() {
    console.log("\n--- Cadastro de Clientes ---");
    const nome = prompt("Nome: ");
    const email = prompt("Email: ");
    const senha = prompt("Senha: ");
    this.cadastro.cadastrarUsuario(nome, email, senha);
    console.log("Usuário cadastrado com sucesso!");
  }

  login() {
    console.log("\n--- Login de Clientes ---");
    const email = prompt("Email: ");
    const senha = prompt("Senha: ");

    const usuario = this.cadastro.encontrarUsuario(email);

    if (usuario) {
      const resultadoLogin = usuario.fazerLogin(email, senha);
      console.log(resultadoLogin);

      if (resultadoLogin === "Login efetuado") {
        const opcao;
        do {
          console.log("\n--- Menu Logado ---");
          console.log("1. Assistir Filme");
          console.log("2. Assistir Série");
          console.log("3. Compartilhar");
          console.log("4. Deslogar");
          opcao = prompt("Escolha uma opção: ");

          switch (opcao) {
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
        } while (opcao !== "4");
      }
    } else {
      console.log("Usuário não encontrado. Faça o cadastro primeiro.");
    }
  }
  assistirFilme() {
    console.log("\n--- Assistir Filme ---");
    this.mostrarMenuFilmes();
    const opcao = prompt("Escolha o filme pelo número: ");

    if (opcao >= 1 && opcao <= this.vetorFilmes.length) {
      const filmeSelecionado = this.vetorFilmes[opcao - 1];
      console.log(`Você está assistindo ao filme: ${filmeSelecionado.nome}`);
      console.log(filmeSelecionado.assistir());
    } else {
      console.log("Opção inválida.");
    }
  }
  assistirSerie() {
    console.log("\n--- Assistir Série ---");
    this.mostrarMenuSeries();
    const opcao = prompt("Escolha a série pelo número: ");

    if (opcao >= 1 && opcao <= this.vetorSeries.length) {
      const serieSelecionada = this.vetorSeries[opcao - 1];
      console.log(
        `Você está assistindo ao filme: ${serieSelecionada.nomeSerie}`
      );
      console.log(serieSelecionada.assistir());
    } else {
      console.log("Opção inválida.");
    }
  }

  compartilhar() {
    console.log("\n--- Compartilhar ---");
    const opcao = prompt("Escolha o tipo de mídia (1. Filme / 2. Série): ");

    switch (opcao) {
      case "1":
        this.mostrarMenuFilmes();
        const opcaoFilme = prompt("Escolha o filme pelo número: ");
        if (opcaoFilme >= 1 && opcaoFilme <= this.vetorFilmes.length) {
          const filmeSelecionado = this.vetorFilmes[opcaoFilme - 1];
          console.log(filmeSelecionado.compartilhar());
          console.log("Compartilhado com sucesso!");
        } else {
          console.log("Opção inválida.");
        }
        break;
      case "2":
        this.mostrarMenuSeries();
        const opcaoSerie = prompt("Escolha a série pelo número: ");
        if (opcaoSerie >= 1 && opcaoSerie <= this.vetorSeries.length) {
          const serieSelecionada = this.vetorSeries[opcaoSerie - 1];
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
    this.vetorFilmes.forEach((filme, index) => {
      console.log(`${index + 1}. ${filme.nome}`);
    });
  }

  mostrarMenuSeries() {
    console.log("\n--- Lista de Séries ---");
    this.vetorSeries.forEach((serie, index) => {
      console.log(`${index + 1}. ${serie.nomeSerie}`);
    });
  }
}

const menu = new Menu();
menu.mostrarMenu();
