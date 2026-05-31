import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { SolicitacaoAcompanhamento } from '../../dados/acompanhamento.interface';
import { ACOMPANHAMENTO_SOLICITACOES_MOCK } from '../../dados/acompanhamento.mock';

@Component({
  selector: 'app-tela-acompanhamento',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './tela-acompanhamento.html',
  styleUrl: './tela-acompanhamento.css',
})
export class TelaAcompanhamento {
  solicitacoes: SolicitacaoAcompanhamento[] = ACOMPANHAMENTO_SOLICITACOES_MOCK;
}
