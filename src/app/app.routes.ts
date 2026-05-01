import { Routes } from '@angular/router';
import { TelaPrincipal } from './componentes/tela-principal/tela-principal';
import { AcessarCaixa } from './componentes/tela-principal/acessar-caixa/acessar-caixa';

export const routes: Routes = [
  {
    path: '',
    component: TelaPrincipal,
    children: [
      {
        path: 'caixa',
        component: AcessarCaixa,
      },
      {
        path: '',
        redirectTo: 'caixa',
        pathMatch: 'full',
      },
    ],
  },
];
