import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
//import { MensagemNotificacao } from '../../interfaces/mensagemnotificacao';
import { MatButtonModule } from '@angular/material/button';
import { MensagemNotificacao } from '../../../interfaces/mensagemnotificacao';
import { NOTIFICACOES_MOCK } from '../../../dados/notificacoes.mock';

@Component({
  selector: 'app-mensagens',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NgIf],
  templateUrl: './mensagens.html',
  styleUrl: './mensagens.css',
})
export class Mensagens {
  mensagem!: MensagemNotificacao;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const nav = this.router.getCurrentNavigation();
    this.mensagem = nav?.extras?.state?.['mensagem'];
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.mensagem = NOTIFICACOES_MOCK.mensagens.find((m) => m.id === id)!;
  }

  voltar() {
    this.router.navigate(['/caixa']);
  }
}
