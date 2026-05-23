import { Component } from '@angular/core';
import { RELATORIO_INCRA_MOCK } from '../../dados/relatorio-incra.mock';

@Component({
  selector: 'app-solicitacao',
  standalone: true,
  imports: [],
  templateUrl: './solicitacao.html',
  styleUrl: './solicitacao.css',
})
export class Solicitacao {
  relatorio = RELATORIO_INCRA_MOCK;

  getValidacao(categoria: string) {
    return this.relatorio.validacoes.find(
      (item) => item.categoria === categoria,
    );
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
