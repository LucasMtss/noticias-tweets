export type Categories =
  | "geral"
  | "negocios"
  | "entretenimento"
  | "saude"
  | "ciencia"
  | "esportes"
  | "tecnologia"
  | "null";

export enum CategoriesValue {
  geral = "Geral",
  negocios = "Negócios",
  entretenimento = "Entretenimento",
  saude = "Saúde",
  ciencia = "Ciência",
  esportes = "Esportes",
  tecnologia = "Tecnologia",
  null = "NULL",
}

export enum CategoriesToSearch {
  "Geral" = "general",
  "Negócios" = "business",
  "Entretenimento" = "entertainment",
  "Saúde" = "health",
  "Ciência" = "science",
  "Esportes" = "sports",
  "Tecnologia" = "technology",
  "NULL" = "general",
}

export interface INews {
  id: string;
  image: string;
  title: string;
  origin: string;
  publishDate: string;
  description: string;
  url: string;
}

export interface INewsResponse {
  news: INews;
  tweets: Tweet[];
  generalSentmentAnalisys: string;
}

export interface NewsFromApi {
  id: string;
  author: string | null;
  category:
    | "general"
    | "business"
    | "entertainment"
    | "health"
    | "science"
    | "sports"
    | "technology";
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
}

export interface Tweet {
  author: string;
  text: string;
  sentimentAnalisys: string;
}

export interface IColors {
  PRETO_PRINCIPAL: string;
  BRANCO: string;
  CINZA_ESCURO: string;
  CINZA_MEDIO: string;
  AZUL: string;
  VERDE: string;
  VERMELHO: string;
  AMARELO: string;
}

export interface DefaultComponentProps {
  toggleTheme: () => void;
}
