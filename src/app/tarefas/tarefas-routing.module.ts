import { Routes, RouterModule } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

export const TarefasRoutes: Routes = [
    /**atalhp para rotas */
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },

    /**rotas de url - pagina de listar */
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },

    /**rota para pagina de cadastro de tarefas */
    {
        path: 'tarefas/cadastra',
        component: CadastrarTarefaComponent,
    }
];
