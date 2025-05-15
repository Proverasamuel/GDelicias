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
    { nome: 'Mini Coxinha', preco: 150, imagem: 'assets/img/mini_coxinha_de_frango.jpg', descricao: 'Pastel de carne bem recheado' },
    { nome: 'Mini Almofadinha de Carne', preco: 150, imagem: 'assets/img/mini_almofada_de_carne.jpg', descricao: 'Pastel de queijo delicioso' },
    { nome: 'Mini Enrolado de Salsicha', preco: 150, imagem: 'assets/img/mini_enroladinho_de_salsicha.jpg', descricao: 'Pastel doce com recheio especial' },
    { nome: 'Mini Almofadinha', preco: 150, imagem: 'assets/img/mini_almofada_de_queijo_e_fiambre.jpg', descricao: 'Opção saudável e saborosa' },
    { nome: 'Bola de Berlim', preco: 200, imagem: 'assets/img/bola_de_berlim.jpg', descricao: 'Suco de laranja natural' },
    { nome: 'Cakes', preco: 250, imagem: 'assets/img/cakes.jpg', descricao: 'Suco de ananás refrescante' },
    { nome: 'Iogurte', preco: 600, imagem: 'assets/img/iogurte.jpg', descricao: 'Suco de manga doce' },
 ];

  precos: Record<string, number> = {
    'Mini Coxinha': 150,
    'Mini Almofadinha de Carne': 150,
    'Mini Enrolado de Salsicha': 150,
    'Mini Almofadinha': 150,
    'Bola de Berlim': 200,
    'Cakes': 250,
    'Iogurte': 600,
    
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

  mostrarModalResumo = false;

abrirModalResumo() {
  this.mostrarModalResumo = true;
}

fecharModalResumo() {
  this.mostrarModalResumo = false;
}

gerarLinkWhatsApp(): string {
  const numeroEmpresa = '+244941715454'; // coloque o número do WhatsApp da empresa com DDI/DD
  let mensagem = `Olá! Gostaria de fazer um pedido:\n`;
  mensagem += `👥 Para: ${this.numeroDePessoas} pessoa(s)\n\n`;
  mensagem += `📦 Produtos:\n`;

  this.carrinho.forEach(item => {
    mensagem += `- ${item.quantidade}x ${item.nome} (KZ ${item.total.toFixed(2)})\n`;
  });

  mensagem += `\n💰 Total: KZ ${this.total.toFixed(2)}`;

  return `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;
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
