export default class Filme {
  constructor(nome, duracao, sinopse, ano) {
    this.nome = nome;
    this.duracao = duracao;
    this.sinopse = sinopse;
    this.ano = ano;
  }

  compartilhar() {
    return `Veja também ${this.nome} onde o filme fala sobre ${this.sinopse}. Foi lançado em ${this.ano} e tem duração de ${this.duracao} minutos.`;
  }

  assistir() {
    return `Assistindo o filme ${this.nome}. Tempo restante -> ${this.duracao} minutos`;
  }
}

let vetorFilmes = [
  new Filme("Divertidamente 2", 195, "Divertidamente 2 marca a sequência da famosa história de Riley (Kaitlyn Dias). Com um salto temporal, a garota agora se encontra mais velha, com 13 anos de idade, passando pela tão temida pré-adolescência.", 2024),
  new Filme("Mufasa: O Rei Leão", 169, "história de Mufasa, o pai de Simba. Com muitos musicais, pode ser que personagens conhecidos do público apareçam no longa.", 2014),
]

export { vetorFilmes };
