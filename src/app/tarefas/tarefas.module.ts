import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router'; /*import de modulerotas*/
import { FormsModule } from '@angular/forms';  /*import modelule de formualrio*/

import { TarefaService} from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  /* faço a declaração do servico*/
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
