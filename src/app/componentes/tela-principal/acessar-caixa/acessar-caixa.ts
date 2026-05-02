import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CaixaNotificacoes } from '../../interfaces/caixa-notificacoes';
import { NOTIFICACOES_MOCK } from '../../dados/notificacoes.mock';
import { MensagemNotificacao } from '../../interfaces/mensagemnotificacao';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acessar-caixa',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgFor, NgIf, CommonModule],
  templateUrl: './acessar-caixa.html',
  styleUrl: './acessar-caixa.css',
})
export class AcessarCaixa {
  dados: CaixaNotificacoes = NOTIFICACOES_MOCK;

  constructor(private router: Router) {}

  abrirMensagem(msg: MensagemNotificacao) {
    this.router.navigate(['/mensagens', msg.id]);
  }

  getIcon(tipo: string) {
    return tipo === 'alerta' ? 'warning' : 'description';
  }

  getClassePrioridade(msg: MensagemNotificacao) {
    return msg.prioridade === 'alta' ? 'alta' : '';
  }

  getClasseBarra(tipo: string) {
    return tipo === 'doc' ? 'azul' : '';
  }
}
