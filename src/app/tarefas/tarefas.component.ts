import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TarefaResponse } from '../model/tarefa-response';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  todasAsTarefas: TarefaResponse[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: TarefaService) { }

  ngOnInit(): void {
    this.montarLista();
  }

  onNovaTarefa() {
    this.router.navigate(['/nova'], {relativeTo: this.route});
  }

  async montarLista(): Promise<void> {
    this.service.listarTarefas()
        .subscribe({
          next: (response) => this.todasAsTarefas = response.objeto,
        })
  }

  onUpdateCard() {
    this.montarLista();
  }

}
