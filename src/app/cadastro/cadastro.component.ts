import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaRequest } from '../model/tarefa-request';
import { TarefaService } from '../services/tarefa.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: TarefaService) { }

  ngOnInit(): void {
  }

  onTarefas() {
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  enviarTarefa(tarefa: TarefaRequest): void {
    this.service.cadastrarTarefa(tarefa);
  }

}
