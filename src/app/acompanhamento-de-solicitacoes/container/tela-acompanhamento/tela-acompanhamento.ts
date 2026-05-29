import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária para as diretivas estruturais
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SolicitacaoAcompanhamento } from '../../dados/acompanhamento.interface';
import { ACOMPANHAMENTO_SOLICITACOES_MOCK } from '../../dados/acompanhamento.mock';

@Component({
  selector: 'app-tela-acompanhamento',
  standalone: true, // Garante que o componente aceita imports diretamente
  imports: [CommonModule, MatButtonModule, MatIconModule], // Adicionado CommonModule aqui
  templateUrl: './tela-acompanhamento.html',
  styleUrl: './tela-acompanhamento.css',
})
export class TelaAcompanhamento {
  solicitacoes: SolicitacaoAcompanhamento[] = ACOMPANHAMENTO_SOLICITACOES_MOCK;
}
