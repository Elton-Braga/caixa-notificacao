import { Routes } from '@angular/router';
import { TelaPrincipal } from './componentes/tela-principal/tela-principal';
import { AcessarCaixa } from './componentes/tela-principal/acessar-caixa/acessar-caixa';
import { Mensagens } from './componentes/tela-principal/acessar-caixa/mensagens/mensagens';
import { AssinarDocs } from './componentes/tela-principal/assinar-docs/assinar-docs';

export const routes: Routes = [
  {
    path: '',
    component: TelaPrincipal,
    children: [
      { path: 'assinador', component: AssinarDocs },
      {
        path: 'caixa',
        component: AcessarCaixa,
      },
      {
        path: 'mensagens/:id',
        component: Mensagens,
      },
      {
        path: '',
        redirectTo: 'caixa',
        pathMatch: 'full',
      },
    ],
  },
];
