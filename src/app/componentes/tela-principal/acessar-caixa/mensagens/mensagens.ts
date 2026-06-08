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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensagens',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    NgIf,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './mensagens.html',
  styleUrl: './mensagens.css',
})
export class Mensagens {
  mensagem!: MensagemNotificacao;
  pdfSrc: SafeResourceUrl | null = null;
  darCiencia = false;
  isChecked = true;
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
    // 🛑 Correção do caminho: Remova o 'src/' do início.
    // O Angular já serve a pasta assets diretamente a partir da raiz.
    const pdfUrl = 'assets/exemplo.pdf';

    // Primeiro limpamos o estado para forçar o iframe a remontar caso o botão seja clicado de novo
    this.pdfSrc = null;

    // Usamos um pequeno timeout apenas para garantir que a detecção de mudanças do Angular
    // limpe o iframe anterior antes de renderizar o novo caminho seguro.
    setTimeout(() => {
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
    }, 50);
  }
  voltar() {
    this.router.navigate(['/tela-principal/caixa']);
  }
}
