import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tela-deadesao',
  standalone: true,
  imports: [MatCheckboxModule, MatButtonModule, FormsModule],
  templateUrl: './tela-deadesao.html',
  styleUrl: './tela-deadesao.css',
})
export class TelaDeadesao {
  aderir = false;

  constructor(private dialogRef: MatDialogRef<TelaDeadesao>) {}

  confirmar() {
    console.log('Usuário aderiu:', this.aderir);
    this.dialogRef.close(this.aderir);
  }
}
