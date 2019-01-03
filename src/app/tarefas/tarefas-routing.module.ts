import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';

export const TarefasRoutes: Routes = [
    /**atalhp para rotas */
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },

    /**rotas de url */
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },

];
