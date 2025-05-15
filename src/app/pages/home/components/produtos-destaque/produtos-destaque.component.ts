import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos-destaque',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './produtos-destaque.component.html',
  styleUrl: './produtos-destaque.component.css'
})
export class ProdutosDestaqueComponent {
telefone = '244930664477';
  modalAberta = false;
  produtoSelecionado: any = null;
  quantidade = 1;
  total = 0;

  produtos = [
    {
      nome: 'Mini Coxinha de Frango',
      descricao: 'Carne moída temperada com especiarias da casa, envolta em massa crocante.',
      preco: 150,
      imagem: 'assets/img/mini_coxinha_de_frango.jpg',
      tag: 'Mais Vendido',
      tagCor: 'bg-yellow-400'
    },
    {
      nome: 'Mini Almofadinha de Carne',
      descricao: 'Combinação clássica de frango desfiado com o cremoso catupiry.',
      preco: 150,
      imagem: 'assets/img/mini_almofada_de_carne.jpg',
      tag: 'Novo',
      tagCor: 'bg-rose-400'
    },
    {
      nome: 'Bola de Berlim',
      descricao: 'Pastel doce com recheio generoso de doce de leite, polvilhado com açúcar.',
      preco: 200,
      imagem: 'assets/img/bola_de_berlim.jpg',
      tag: 'Mais Vendido',
      tagCor: 'bg-yellow-400'
    }
  ];

  abrirModal(produto: any) {
    this.produtoSelecionado = produto;
    this.quantidade = 1;
    this.total = produto.preco;
    this.modalAberta = true;
  }

  atualizarTotal() {
    this.total = this.quantidade * this.produtoSelecionado.preco;
  }

  concluirPedido() {
    const msg = `Olá! Gostaria de encomendar:\n\n*${this.produtoSelecionado.nome}*\nQuantidade: ${this.quantidade}\nPreço unitário: ${this.produtoSelecionado.preco} Kz\nTotal: ${this.total} Kz`;
    const url = `https://wa.me/${this.telefone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    this.modalAberta = false;
  }

  cancelar() {
    this.modalAberta = false;
  }
}
