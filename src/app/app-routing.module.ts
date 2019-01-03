import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefasRoutes } from './tarefas/';


const routes: Routes = [

  /**indicando pagina inicial url principal */
    {
      path: '',
      redirectTo: '/tarefas/listar',
      pathMatch: 'full'
    },

  /* Operação do typescript - para concatenar Arrays*/
  ...TarefasRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
