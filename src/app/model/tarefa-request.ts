import { Prioridade } from "./enumeradores";

export interface TarefaRequest {
  titulo: string;
  descricao: string;
  prioridade: Prioridade;
}
