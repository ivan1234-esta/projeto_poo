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
    return `Veja tambem a série ${this.nomeSerie}, temporada ${this.temporada}, episodio ${this.episodio}. Sinopse: ${this.sinopse}. Foi lançada em ${this.ano}.`;
  }
}

const vetorSeries = [
  {
    id: "Série 1",
    nome: "Breaking Bad",
    nomeSerie: "Breaking Bad",
    duracao: 45,
    sinopse:
      "Um professor de química se torna um fabricante de metanfetaminas após descobrir que tem câncer terminal.",
    ano: 2008,
    episodio: 62,
    temporada: 5,
  },
  {
    id: "Série 2",
    nome: "Stranger Things",
    nomeSerie: "Stranger Things",
    duracao: 50,
    sinopse:
      "Em uma cidade pequena, crianças enfrentam mistérios sobrenaturais envolvendo experiências secretas do governo e forças sobrenaturais.",
    ano: 2016,
    episodio: 25,
    temporada: 3,
  },
  {
    id: "Série 3",
    nome: "Game of Thrones",
    nomeSerie: "Game of Thrones",
    duracao: 60,
    sinopse:
      "Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos.",
    ano: 2011,
    episodio: 73,
    temporada: 8,
  },
];

// Transformando cada objeto do vetor em uma instância da classe Series
vetorSeries = vetorSeries.map((serie) => {
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

export { vetorSeries }; // Exportando o vetor de séries
