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

  // Controla o valor selecionado na combobox (inicia mostrando todas)
  categoriaSelecionada: string = 'todas';

  // Extrai dinamicamente as categorias exclusivas do Mock para alimentar o Select
  categorias: string[] = Array.from(
    new Set(this.relatorio.validacoes.map((c) => c.categoria)),
  );

  pendencias = this.relatorio.validacoes.flatMap((categoria) =>
    categoria.itens
      .filter((item) => item.status.toLowerCase() === 'pendente')
      .map((item, index) => ({
        categoria: categoria.categoria,
        titulo: item.titulo,
        status: item.status,

        descricao: '',
        especificacao: '',
        justificativa: '',
        aberto: index === 0,
      })),
  );

  // Filtra a lista de pendências exibida no HTML com base na escolha da combobox
  get pendenciasFiltradas() {
    if (this.categoriaSelecionada === 'todas') {
      return this.pendencias;
    }
    return this.pendencias.filter(
      (p) =>
        p.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase(),
    );
  }

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
