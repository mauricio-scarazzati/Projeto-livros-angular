import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'WMF Martins Fontes' },
    { codEditora: 2, nome: 'Leya' },
    { codEditora: 3, nome: 'Suma' }
  ];

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  }
}

