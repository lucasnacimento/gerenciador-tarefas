import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TarefaResponse } from '../model/tarefa-response';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.scss']
})
export class CardTarefaComponent implements OnInit {

  @Input() tarefa: TarefaResponse;

  @Output() updateCard = new EventEmitter();

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
  }

  onConcluirTarefa() {
    this.service.concluirTarefa(this.tarefa)
        .subscribe({
          error: (err) => alert("Erro ao concluir Tarefa!"),
          complete: () => this.updateCard.emit({cardAtualizado: this.tarefa})
        });
  }

  isConcluido(): boolean {
    return this.tarefa.status.toString() === 'CONCLUIDO'
  }

}
