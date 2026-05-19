import { Routes } from '@angular/router';

import { TelaPrincipal } from './componentes/tela-principal/tela-principal';
import { AcessarCaixa } from './componentes/tela-principal/acessar-caixa/acessar-caixa';
import { Mensagens } from './componentes/tela-principal/acessar-caixa/mensagens/mensagens';
import { AssinarDocs } from './componentes/tela-principal/assinar-docs/assinar-docs';
import { DocsAssinados } from './componentes/tela-principal/docs-assinados/docs-assinados';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  /* PRIMEIRA TELA EXIBIDA */
  {
    path: '',
    component: Dashboard,
  },

  /* ÁREA PRINCIPAL DO SISTEMA */
  {
    path: 'tela-principal',
    component: TelaPrincipal,

    children: [
      {
        path: 'assinador',
        component: AssinarDocs,
      },

      {
        path: 'caixa',
        component: AcessarCaixa,
      },

      {
        path: 'mensagens/:id',
        component: Mensagens,
      },

      {
        path: 'assinados',
        component: DocsAssinados,
      },

      {
        path: '',
        redirectTo: 'caixa',
        pathMatch: 'full',
      },
    ],
  },

  /* FALLBACK */
  {
    path: '**',
    redirectTo: '',
  },
];
