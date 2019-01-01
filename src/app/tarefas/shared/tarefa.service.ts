
/**
 * Class de Serviços - com armazenamento no localStore do navegador
 * @author Dowglas Maia - Skype: live:dowglasmaia
 */

import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  constructor() { }

  /** Listar Todos - com localStorage
  @return Array de Tarefas [] em formato JSON
  */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * metodo cadastra uma nova tarefa
   * @return void
   */
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime(); /*adionar a data e hora como id*/
    tarefas.push(tarefa); /*inseria a terefa no final da lista*/
    localStorage['tarefas'] = JSON.stringify(tarefas);  /*pega as tarefas e converte para string e guarda no localstorage*/
  }

/**
   * metodo buscar tefas por id
   * @return Tarefa
   */
buscarPorId(id: number): Tarefa {
  const tarefas: Tarefa[] = this.listarTodos();
  return tarefas.find(tarefa => tarefa.id === id); /**o return faz um buscar e interação na lista, e caso
                                                      encontre uma tarefa com o id igual ao passado com
                                                      paramentro retorna a mesma*/
}


  /**
   * metodo Atualizar
   * @return void
   */
atualizar(tarefa: Tarefa): void {
  const tarefas: Tarefa[] = this.listarTodos();
  tarefas.forEach((obj, index, objs) => {
    if (tarefa.id === obj.id) {
      objs[index] = tarefa;
    }
  });
  localStorage['tarefas'] = JSON.stringify(tarefas);
}

 /**
   * metodo Remover
   * @return void
   */
romover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id); /*retorna todas as tarefas menos a passado como paramentro */
    localStorage['tarefas'] = JSON.stringify(tarefas);
}

 /**
   * metodo Alterar Status
   * @return void
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}


