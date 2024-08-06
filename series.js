import Filme from "./filme.js";

export default class Series extends Filme {
  constructor(nome, nomeSerie, duracao, sinopse, ano, episodio, temporada) {
    super(nome, duracao, sinopse, ano);
    this.nomeSerie = nomeSerie;
    this.episodio = episodio;
    this.temporada = temporada;
  }

  assistir() {
    return `Assistindo à série ${this.nomeSerie}, temporada ${this.temporada}, episodio ${this.episodio}. Tempo restante -> ${this.duracao} minutos`;
  }

  compartilhar() {
    return `Super série ${this.nomeSerie}, temporada ${this.temporada}, episodio ${this.episodio}. Sinopse: ${this.sinopse}. Foi lançada em ${this.ano}.`;
  }
}

let dataSeries = [
  {
    id: "Série 1",
    nome: "Macho Alfa",
    nomeSerie: "Macho Alfa",
    duracao: 60,
    sinopse:
      " Quatro amigos que, após perceberem as mudanças na sociedade e nas questões de gênero, decidem que precisam repensar seus comportamentos e se readaptar.",
    ano: 2024,
    episodio: 4,
    temporada: 1,
  },
  {
    id: "Série 2",
    nome: "Uma família quase perfeita",
    nomeSerie: "Uma família quase perfeita",
    duracao: 30,
    sinopse:
      " Uma jovem misteriosa acusada de assassinar o namorado. A mãe da garota, uma advogada famosa, e o pai, um religioso respeitado, unem forças para defender a filha.",
    ano: 2023,
    episodio: 10,
    temporada: 2,
  },

];
dataSeries = dataSeries.map((serie) => {
  return new Series(
    serie.nome,
    serie.nomeSerie,
    serie.duracao,
    serie.sinopse,
    serie.ano,
    serie.episodio,
    serie.temporada
  );
});

export { dataSeries }; 
