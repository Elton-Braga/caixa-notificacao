import { Routes } from '@angular/router';

import { TelaPrincipal } from './componentes/tela-principal/tela-principal';
import { AcessarCaixa } from './componentes/tela-principal/acessar-caixa/acessar-caixa';
import { Mensagens } from './componentes/tela-principal/acessar-caixa/mensagens/mensagens';
import { AssinarDocs } from './componentes/tela-principal/assinar-docs/assinar-docs';
import { DocsAssinados } from './componentes/tela-principal/docs-assinados/docs-assinados';
import { Dashboard } from './dashboard/dashboard';
import { ResolucaoPendencias } from './componentes/resolucao-pendencias/resolucao-pendencias';
import { Container } from './componentes/resolucao-pendencias/container/container';
import { TelaServicos } from './dashboard/tela-servicos/tela-servicos';

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

  {
    path: 'tela-servicos',
    component: TelaServicos,
  },
  {
    path: 'resolucao-pendencias',
    component: ResolucaoPendencias,

    children: [
      {
        path: 'container',
        component: Container,
      },

      {
        path: '',
        redirectTo: 'container',
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
