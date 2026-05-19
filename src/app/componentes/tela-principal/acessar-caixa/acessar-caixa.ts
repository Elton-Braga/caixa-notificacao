import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CaixaNotificacoes } from '../../interfaces/caixa-notificacoes';
import { NOTIFICACOES_MOCK } from '../../dados/notificacoes.mock';
import { MensagemNotificacao } from '../../interfaces/mensagemnotificacao';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-acessar-caixa',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NgFor,
    NgIf,
    CommonModule,
    MatMenuModule,
  ],
  templateUrl: './acessar-caixa.html',
  styleUrl: './acessar-caixa.css',
})
export class AcessarCaixa {
  abaSelecionada: string = 'Todas';
  dados: CaixaNotificacoes = NOTIFICACOES_MOCK;
  isMobile = false;
  constructor(
    private router: Router,
    private breakpoint: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.verificarTela();
  }

  @HostListener('window:resize')
  onResize() {
    this.verificarTela();
  }

  verificarTela() {
    this.isMobile = window.innerWidth <= 768;
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
  }

  abrirMensagem(msg: MensagemNotificacao) {
    this.router.navigate(['/tela-principal/mensagens', msg.id]);
  }

  getIcon(tipo: string): string {
    switch (tipo) {
      case 'alerta':
        return 'warning';
      case 'doc':
        return 'description';
      default:
        return 'notifications';
    }
  }

  getClassePrioridade(msg: MensagemNotificacao) {
    return msg.prioridade === 'alta' ? 'alta' : '';
  }

  getClasseBarra(tipo: string) {
    return tipo === 'doc' ? 'azul' : '';
  }

  selecionarTab(tab: any) {
    this.dados.tabs.forEach((t) => (t.ativa = false));
    tab.ativa = true;
    this.abaSelecionada = tab.nome;
  }

  get mensagensFiltradas() {
    switch (this.abaSelecionada) {
      case 'Não lidas':
        return this.dados.mensagens.filter((m) => m.status === 'nao-lida');

      case 'Lidas':
        return this.dados.mensagens.filter((m) => m.status === 'lida');

      case 'Arquivadas':
        return this.dados.mensagens.filter((m) => m.status === 'arquivada');

      default:
        return this.dados.mensagens;
    }
  }
}
