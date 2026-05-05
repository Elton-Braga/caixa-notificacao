import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NOTIFICACOES_MOCK } from '../../dados/notificacoes.mock';

//import { NOTIFICACOES_MOCK } from '../../../dados/notificacoes.mock';

@Component({
  selector: 'app-assinar-docs',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './assinar-docs.html',
  styleUrl: './assinar-docs.css',
})
export class AssinarDocs {
  mensagensDoc: any[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // 🔽 Filtra apenas documentos/contratos
    this.mensagensDoc = NOTIFICACOES_MOCK.mensagens
      .filter((m) => m.tipo === 'doc')
      .map((m) => ({
        ...m,
        selecionado: false,
        pdfSrc: null,
      }));
  }

  visualizarDocumento(msg: any) {
    // 🔽 Simulação de PDF
    const fakePdfUrl = 'assets/exemplo.pdf'; // coloque um PDF real aqui

    msg.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(fakePdfUrl);
  }
}
