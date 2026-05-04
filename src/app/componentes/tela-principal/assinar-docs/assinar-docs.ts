import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-assinar-docs',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatButtonModule, MatIconModule],
  templateUrl: './assinar-docs.html',
  styleUrl: './assinar-docs.css',
})
export class AssinarDocs {
  file: File | null = null;
  pdfSrc: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  removeFile() {
    this.file = null;
    this.pdfSrc = null;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      this.loadPdf(file);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.file = file;
      this.loadPdf(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  private loadPdf(file: File) {
    if (file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.pdfSrc = null;
    }
  }
}
