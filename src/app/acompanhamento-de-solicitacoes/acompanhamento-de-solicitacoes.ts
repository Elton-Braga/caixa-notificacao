import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-acompanhamento-de-solicitacoes',
  imports: [
    MatIconModule,
    MatButtonModule,
    // RouterOutlet,
    RouterModule,
    MatCheckboxModule,
    //RouterLink,
  ],
  templateUrl: './acompanhamento-de-solicitacoes.html',
  styleUrl: './acompanhamento-de-solicitacoes.css',
})
export class AcompanhamentoDeSolicitacoes {
  irParaCaixa() {}
}
