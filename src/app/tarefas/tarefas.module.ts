import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService} from './shared';
import { ListarTarefaComponent } from './listar';

@NgModule({
  declarations: [ListarTarefaComponent],
  imports: [
    CommonModule
  ],

  /* faço a declaração do servico*/
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
