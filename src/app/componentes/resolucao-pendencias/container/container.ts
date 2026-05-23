import { Component } from '@angular/core';
import { DadosBasicos } from './dados-basicos/dados-basicos';
import { Solicitacao } from './solicitacao/solicitacao';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DadosBasicos, Solicitacao],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
