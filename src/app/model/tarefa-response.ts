import { Prioridade, Status } from "./enumeradores";

export interface TarefaResponse {
  titulo: string;
  descricao: string;
  prioridade: Prioridade;
  status: Status;
}
