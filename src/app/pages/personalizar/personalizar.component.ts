import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from "./components/hero/hero.component";
import { NgFor, NgIf } from '@angular/common';
import { ToastService } from '../../toast.service';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  total: number;
}

@Component({
  selector: 'app-personalizar',
  standalone: true,
  imports: [FormsModule, HeroComponent, NgFor, NgIf, LucideAngularModule],
  templateUrl: './personalizar.component.html',
  styleUrls: ['./personalizar.component.css'],
})
export class PersonalizarComponent {
  constructor(private toastService: ToastService) {}
  readonly Trash2 = Trash2;
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
    this.toastService.show(`Mais 1 unidade de ${produto.nome} foi adicionada ao carrinho.`);
  } else {
    this.carrinho.push({
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
      total: produto.preco
    });
    this.toastService.show(`${produto.nome} foi adicionado ao pacote!`);
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
  const numeroEmpresa = '+244959801439'; // coloque o número do WhatsApp da empresa com DDI/DD
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
    this.toastService.show(`Pacote personalizado para ${this.numeroDePessoas} pessoas.`);
  }

  abrirModalPersonalizar() {
    this.mostrarModal = true;  // Abre o modal
  }

  fecharModal() {
    this.mostrarModal = false;  // Fecha o modal
  }

  removerProduto(produto: { nome: string }) {
  const index = this.carrinho.findIndex(item => item.nome === produto.nome);

  if (index !== -1) {
    if (this.carrinho[index].quantidade > 1) {
      this.carrinho[index].quantidade--;
      this.carrinho[index].total = this.carrinho[index].quantidade * this.carrinho[index].preco;
      this.toastService.show(`1 unidade de ${produto.nome} foi removida.`);
    } else {
      this.carrinho.splice(index, 1);
      this.toastService.show(`${produto.nome} foi removido do carrinho.`);
    }
  }
}


  aplicarNumeroDePessoas() {
    this.mostrarModal = false;  // Fecha o modal
    // Aplica o número de pessoas aos produtos do carrinho
    this.toastService.show(`Pacote personalizado para ${this.numeroDePessoas} pessoas.`);
 
    this.carrinho.forEach(item => {
      item.total = item.preco * this.numeroDePessoas;
    });
  }

  get total() {
    return this.carrinho.reduce((acc, item) =>
      acc + item.preco * item.quantidade * this.numeroDePessoas, 0);
  }
  
}
