import { Component, Input, OnInit } from '@angular/core';
import { TarefaResponse } from '../model/tarefa-response';

@Component({
  selector: 'card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.scss']
})
export class CardTarefaComponent implements OnInit {

  @Input() tarefa: TarefaResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
