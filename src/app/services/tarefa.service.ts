import { TarefaRequest } from '../model/tarefa-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaResponse } from '../model/tarefa-response';
import { URL_BASE } from 'src/environments/environment';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly TAREFA_ENVIAR = '/task/criar';

  private readonly TAREFA_BUSCAR_TODOS = '/task/buscar-todos';

  constructor(private httpClient: HttpClient) { }

  cadastrarTarefa(request: TarefaRequest) {
    return this.httpClient.post<TarefaResponse>(URL_BASE.concat(this.TAREFA_ENVIAR), request).subscribe();
  }

  listarTarefas() : Observable<Response> {
    return this.httpClient.get<Response>(URL_BASE.concat(this.TAREFA_BUSCAR_TODOS));
  }
}
