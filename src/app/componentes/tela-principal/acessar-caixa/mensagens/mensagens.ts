import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
//import { MensagemNotificacao } from '../../interfaces/mensagemnotificacao';
import { MatButtonModule } from '@angular/material/button';
import { MensagemNotificacao } from '../../../interfaces/mensagemnotificacao';
import { NOTIFICACOES_MOCK } from '../../../dados/notificacoes.mock';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-mensagens',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    NgIf,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './mensagens.html',
  styleUrl: './mensagens.css',
})
export class Mensagens {
  mensagem!: MensagemNotificacao;
  pdfSrc: SafeResourceUrl | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    const nav = this.router.getCurrentNavigation();
    this.mensagem = nav?.extras?.state?.['mensagem'];
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mensagem = NOTIFICACOES_MOCK.mensagens.find((m) => m.id === id)!;
  }
  visualizarDocumento() {
    const pdfUrl = 'assets/exemplo.pdf'; // 🔥 seu arquivo
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
  }
  voltar() {
    this.router.navigate(['/caixa']);
  }
}
