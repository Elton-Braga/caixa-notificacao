import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TelaDeadesao } from './tela-deadesao/tela-deadesao';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterModule,
    MatCheckboxModule,
  ],
  templateUrl: './tela-principal.html',
  styleUrl: './tela-principal.css',
})
export class TelaPrincipal {
  menuAberto = false;
  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    this.abrirModal();
  }

  abrirModal() {
    this.dialog.open(TelaDeadesao, {
      width: '400px',
      disableClose: true, // força o usuário decidir
    });
  }

  irParaCaixa() {
    this.router.navigate(['/caixa']);
  }
}
