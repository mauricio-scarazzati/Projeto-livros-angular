import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Livro[] = [
    new Livro(1, 1, 'O Hobbit', 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta.', ['J. R. R. Tolkien']),
    new Livro(2, 2, 'A Guerra dos Tronos : As Crônicas de Gelo e Fogo', 'A guerra dos tronos é o primeiro livro da série best-seller internacional As Crônicas de Gelo e Fogo, que deu origem à adaptação de sucesso da HBO, Game of Thrones.', ['George R. R. Martin']),
    new Livro(3, 3, 'Outsider', 'Um crime indescritível. Uma investigação inexplicável. Uma das histórias mais perturbadoras de Stephen King dos últimos tempos.', ['Stephen King'])
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index > -1) this.livros.splice(index, 1);
  }
}


