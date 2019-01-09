import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})

export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm; /* Faz referncia ao Formulario da View*/
    tarefa: Tarefa;

    /* Declaro os serviços no construtor*/
  constructor(
      private tarefaService: TarefaService,
      private route: ActivatedRoute,
      private router: Router
      ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; /* pegar o paramentro passado como argumento, na view */
    this.tarefa = this.tarefaService.buscarPorId(id); /* chamo o buscar por ID da camada de serviço */
  }

  /* Atualizar*/
  atualizar(): void {
    if (this.formTarefa.form.valid) {
        this.tarefaService.atualizar(this.tarefa);
        this.router.navigate(['/tarefas']); /* Atualiza e redireciona para a pagina de Tarefas */
    }
  }

}
