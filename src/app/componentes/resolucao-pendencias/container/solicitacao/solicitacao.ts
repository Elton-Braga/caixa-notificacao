import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RELATORIO_INCRA_MOCK } from '../../dados/relatorio-incra.mock';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CriarJustificativa } from '../criar-justificativa/criar-justificativa';

@Component({
  selector: 'app-solicitacao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './solicitacao.html',
  styleUrl: './solicitacao.css',
})
export class Solicitacao {
  relatorio = RELATORIO_INCRA_MOCK;

  pendencias = this.relatorio.validacoes.flatMap((categoria) =>
    categoria.itens
      .filter((item) => item.status.toLowerCase() === 'pendente')
      .map((item, index) => ({
        categoria: categoria.categoria,
        titulo: item.titulo,
        resposta: item.resposta,
        status: item.status,
        descricao:
          'Pendência identificada automaticamente pelo sistema durante a análise do requerimento.',
        justificativa: '',
        justificativaCriada: false,
        aberto: false,
      })),
  );

  get categoriasUnicas(): string[] {
    return [...new Set(this.pendencias.map((p) => p.categoria))];
  }

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  getPendenciasPorCategoria(categoria: string) {
    return this.pendencias.filter((p) => p.categoria === categoria);
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

  abrirModalJustificativa(pendencia: any): void {
    const dialogRef = this.dialog.open(CriarJustificativa, {
      width: '700px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'modal-justificativa',
      data: {
        justificativa: pendencia.justificativa || '',
      },
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        pendencia.justificativa = resultado;
        pendencia.justificativaCriada = true;

        this.snackBar.open('Justificativa enviada com sucesso!', 'Fechar', {
          duration: 4000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['toast-sucesso-azul'],
        });
      }
    });
  }

  enviarJustificativa(pendencia: any): void {
    console.log('Justificativa enviada:', pendencia);
  }

  getQuantidadePorCategoria(categoria: string): number {
    return this.pendencias.filter((p) => p.categoria === categoria).length;
  }

  podeCriarJustificativa(categoria: string): boolean {
    return categoria !== 'Pendências a serem analisadas pelo Incra';
  }

  isSupervisao(categoria: string): boolean {
    return categoria === 'Supervisão';
  }

  acaoJustificativa(pendencia: any): void {
    if (!pendencia.justificativaCriada) {
      this.abrirModalJustificativa(pendencia);
      return;
    }

    this.enviarJustificativa(pendencia);
  }
}
