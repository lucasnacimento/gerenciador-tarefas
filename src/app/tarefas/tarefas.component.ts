import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Response } from '../model/response';
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
          error: (err) => alert('Erro ao carregar as tarefas. tente novamente mais tarde.'),
        })
  }

  onUpdateCard(event: any) {
    this.montarLista();
  }

}
