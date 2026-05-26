import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RELATORIO_INCRA_MOCK } from '../../dados/relatorio-incra.mock';

@Component({
  selector: 'app-solicitacao',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './solicitacao.html',
  styleUrl: './solicitacao.css',
})
export class Solicitacao {
  relatorio = RELATORIO_INCRA_MOCK;

  pendencias = this.relatorio.validacoes.flatMap((categoria) =>
    categoria.itens
      .filter((item) => item.status.toLowerCase() === 'pendente')
      .map((item) => ({
        categoria: categoria.categoria,
        titulo: item.titulo,
        status: item.status,

        descricao: '',
        especificacao: '',
        justificativa: '',
      })),
  );

  cancelarPendencia(pendencia: any): void {
    pendencia.especificacao = '';
    pendencia.justificativa = '';
  }

  salvarResolucao(pendencia: any): void {
    console.log('Pendência salva:', pendencia);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'válido':
        return 'success';

      case 'atenção':
        return 'warning';

      case 'pendente':
        return 'danger';

      case 'concluido':
        return 'success';

      case 'andamento':
        return 'warning';

      default:
        return 'danger';
    }
  }
}
