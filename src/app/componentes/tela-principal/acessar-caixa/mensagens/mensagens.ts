import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
//import { MensagemNotificacao } from '../../interfaces/mensagemnotificacao';
import { MatButtonModule } from '@angular/material/button';
import { MensagemNotificacao } from '../../../interfaces/mensagemnotificacao';

@Component({
  selector: 'app-mensagens',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NgIf],
  templateUrl: './mensagens.html',
  styleUrl: './mensagens.css',
})
export class Mensagens {
  mensagem!: MensagemNotificacao;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.mensagem = nav?.extras?.state?.['mensagem'];
  }

  voltar() {
    this.router.navigate(['/caixa']);
  }
}
