import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BASE } from 'src/environments/environment';

import { TarefaRequest } from '../model/tarefa-request';
import { TarefaResponse } from '../model/tarefa-response';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly TAREFA_ENVIAR = '/criar';

  private readonly TAREFA_BUSCAR_TODOS = '/buscar-todos';

  private readonly CONCLUIR_TAREFA = '/concluir';

  constructor(private httpClient: HttpClient) { }

  cadastrarTarefa(request: TarefaRequest): Observable<TarefaResponse> {
    return this.httpClient.post<TarefaResponse>(URL_BASE.concat(this.TAREFA_ENVIAR), request);
  }

  listarTarefas() : Observable<Response> {
    return this.httpClient.get<Response>(URL_BASE.concat(this.TAREFA_BUSCAR_TODOS));
  }

  concluirTarefa(request: TarefaRequest): Observable<TarefaRequest> {
    return this.httpClient.put<TarefaRequest>(URL_BASE.concat('/'+request.titulo).concat(this.CONCLUIR_TAREFA), request);
  }

}
