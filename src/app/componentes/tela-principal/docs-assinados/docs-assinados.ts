import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NOTIFICACOES_MOCK } from '../../dados/notificacoes.mock';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-docs-assinados',
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './docs-assinados.html',
  styleUrl: './docs-assinados.css',
})
export class DocsAssinados {
  mensagensDoc: any[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.mensagensDoc = NOTIFICACOES_MOCK.mensagens
      .filter((m) => m.tipo === 'doc' || m.titulo === 'Vencimento de Contrato')
      .map((m) => ({
        ...m,
        selecionado: false,
        pdfSrc: null,
        dataAssinatura: this.gerarDataAssinatura(),
      }));
  }

  gerarDataAssinatura(): string {
    const datas = [
      '01/05/2026 às 09:14',
      '02/05/2026 às 11:32',
      '03/05/2026 às 14:05',
      '04/05/2026 às 16:48',
      '05/05/2026 às 08:21',
      '06/05/2026 às 10:57',
      '07/05/2026 às 13:19',
    ];

    return datas[Math.floor(Math.random() * datas.length)];
  }

  visualizarDocumento(msg: any) {
    // 🔽 Simulação de PDF
    const fakePdfUrl = 'assets/exemplo.pdf'; // coloque um PDF real aqui

    msg.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(fakePdfUrl);
  }
}
