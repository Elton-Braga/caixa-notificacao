import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // 1. Importar o CommonModule
import { ACOMPANHAMENTO_SOLICITACOES_MOCK } from './dados/acompanhamento.mock';

@Component({
  selector: 'app-acompanhamento-de-solicitacoes',
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatCheckboxModule,
    CommonModule, // 2. Adicionar aqui
  ],
  templateUrl: './acompanhamento-de-solicitacoes.html',
  styleUrl: './acompanhamento-de-solicitacoes.css',
})
export class AcompanhamentoDeSolicitacoes {
  // 3. Disponibilizar os dados para o HTML
  solicitacoes = ACOMPANHAMENTO_SOLICITACOES_MOCK;

  irParaCaixa() {}

  executarAcao(acao: string, protocolo: string) {
    console.log(`Ação: ${acao} para o protocolo ${protocolo}`);
  }
}
