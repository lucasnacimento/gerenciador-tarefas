import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BASE } from 'src/environments/environment';

import { TarefaRequest } from '../model/tarefa-request';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly TAREFA_ENVIAR = '/task/criar';

  private readonly TAREFA_BUSCAR_TODOS = '/task/buscar-todos';

  constructor() { }

  cadastrarTarefa(request: TarefaRequest): Promise<Response> {
    return fetch(URL_BASE.concat(this.TAREFA_ENVIAR), {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify(request)});
  }

  listarTarefas() : Promise<Response> {
    return fetch(URL_BASE.concat(this.TAREFA_BUSCAR_TODOS), {method:'GET'});
  }

}
