import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterOutlet],
  templateUrl: './tela-principal.html',
  styleUrl: './tela-principal.css',
})
export class TelaPrincipal {}
