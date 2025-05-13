import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from "./components/hero/hero.component";
import { NgFor, NgIf } from '@angular/common';

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  total: number;
}

@Component({
  selector: 'app-personalizar',
  standalone: true,
  imports: [FormsModule, HeroComponent, NgFor, NgIf],
  templateUrl: './personalizar.component.html',
  styleUrls: ['./personalizar.component.css'],
})
export class PersonalizarComponent {
  pasteis = ['Carne', 'Queijo', 'Doce', 'Vegetariano'];
  sumos = ['Laranja', 'Ananás', 'Manga'];
  iogurtes = ['Natural', 'Morango'];

  carrinho: Produto[] = [];
  numeroDePessoas: number = 1;
  preferenciasAlimentares = {
    semLactose: false,
    semGluten: false,
    vegano: false
  };
  produtos = [
    { nome: 'Carne', preco: 500, imagem: 'assets/pasteis/carne.jpg', descricao: 'Pastel de carne bem recheado' },
    { nome: 'Queijo', preco: 500, imagem: 'assets/pasteis/queijo.jpg', descricao: 'Pastel de queijo delicioso' },
    { nome: 'Doce', preco: 400, imagem: 'assets/pasteis/doce.jpg', descricao: 'Pastel doce com recheio especial' },
    { nome: 'Vegetariano', preco: 600, imagem: 'assets/pasteis/vegetariano.jpg', descricao: 'Opção saudável e saborosa' },
    { nome: 'Laranja', preco: 300, imagem: 'assets/bebidas/laranja.jpg', descricao: 'Suco de laranja natural' },
    { nome: 'Ananás', preco: 300, imagem: 'assets/bebidas/ananás.jpg', descricao: 'Suco de ananás refrescante' },
    { nome: 'Manga', preco: 300, imagem: 'assets/bebidas/manga.jpg', descricao: 'Suco de manga doce' },
    { nome: 'Natural', preco: 400, imagem: 'assets/iogurtes/natural.jpg', descricao: 'Iogurte natural leve' },
    { nome: 'Morango', preco: 400, imagem: 'assets/iogurtes/morango.jpg', descricao: 'Iogurte de morango' }
  ];

  precos: Record<string, number> = {
    'Carne': 500,
    'Queijo': 500,
    'Doce': 400,
    'Vegetariano': 600,
    'Laranja': 300,
    'Ananás': 300,
    'Manga': 300,
    'Natural': 400,
    'Morango': 400,
  };

 
  mostrarModal: boolean = false;

  adicionarProduto(produto: { nome: string, preco: number }) {
    const existente = this.carrinho.find(item => item.nome === produto.nome);

    if (existente) {
      existente.quantidade++;
      existente.total = existente.quantidade * produto.preco;
    } else {
      this.carrinho.push({ nome: produto.nome, preco: produto.preco, quantidade: 1, total: produto.preco });
    }
  }

  adicionarAoPedido(numero: number) {
    this.numeroDePessoas = numero;
  }

  abrirModalPersonalizar() {
    this.mostrarModal = true;  // Abre o modal
  }

  fecharModal() {
    this.mostrarModal = false;  // Fecha o modal
  }

  aplicarNumeroDePessoas() {
    this.mostrarModal = false;  // Fecha o modal
    // Aplica o número de pessoas aos produtos do carrinho
    this.carrinho.forEach(item => {
      item.total = item.preco * this.numeroDePessoas;
    });
  }

  get total() {
    return this.carrinho.reduce((acc, item) =>
      acc + item.preco * item.quantidade * this.numeroDePessoas, 0);
  }
  
}
