import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-tela-servicos',
  standalone: true,

  imports: [MatIconModule],

  templateUrl: './tela-servicos.html',

  styleUrl: './tela-servicos.css',
})
export class TelaServicos {
  constructor(private router: Router) {}

  voltar(): void {
    this.router.navigate(['/']);
  }

  acessarRegularizacao(): void {
    this.router.navigate(['/resolucao-pendencias/container']);
  }
}
