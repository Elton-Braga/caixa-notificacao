import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './tela-principal.html',
  styleUrl: './tela-principal.css',
})
export class TelaPrincipal {}
