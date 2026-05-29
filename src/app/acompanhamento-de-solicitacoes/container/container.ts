import { Component } from '@angular/core';
import { TelaAcompanhamento } from './tela-acompanhamento/tela-acompanhamento';

@Component({
  selector: 'app-container',
  imports: [TelaAcompanhamento],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class ContainerAcompanhamento {}
