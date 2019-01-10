import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa []; /*armazena as tarefas */

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();


  }

/* lsitar Todas - pega os dados do service e envia para o html */
listarTodos(): Tarefa [] {
  return this.tarefaService.listarTodos();
}

/* Remover */
remover($event: any, tarefa: Tarefa): void {
  $event.preventDefault(); /* EVITA QUE A PAGINA SEJA REDENRIZADA */
  if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.romover(tarefa.id);
      this.tarefas = this.listarTodos();
  }
}

  /* Alterar Status*/
  alterarStatus($event: any, tarefa: Tarefa): void {
    $event.preventDefault(); /* EVITA QUE A PAGINA SEJA REDENRIZADA */
    if (confirm('Deseja Alterar o statos "' + tarefa.nome + '"?')) {
        this.tarefaService.alterarStatus(tarefa.id);
        this.tarefas = this.listarTodos();
    }

  }
}
