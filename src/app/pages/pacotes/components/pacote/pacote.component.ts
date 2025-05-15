import { Component } from '@angular/core';

@Component({
  selector: 'app-pacote',
  standalone: true,
  imports: [],
  templateUrl: './pacote.component.html',
  styleUrl: './pacote.component.css',
})
export class PacoteComponent {
  telefone = '244941715454'; // Substitua pelo número correto

  enviarEncomendaWhatsApp(pacote: any) {
    const mensagem = `Olá! Gostaria de encomendar o pacote ${
      pacote.nome
    }: ${pacote.itens.join(', ')}. Serve ${pacote.serve}. Preço: ${
      pacote.preco
    }.`;
    const url = `https://wa.me/${this.telefone}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, '_blank');
  }

  pacote1 = {
    nome: 'Individual “Lanche Rápido”',
    itens: [
      '2 Mini Coxinhas de Frango',
      '2 Mini Almofadinhas de Carne',
      '1 Mini Enrolado de Salsicha',
      '1 Mini Almofada de Queijo e Fiambre',
      '1 Iogurte (natural ou com fruta)',
      '1 Mini Cake ou 1 Bola de Berlim',
    ],
    serve: '1 pessoa',
    preco: '1.650 Kz',
  };

  pacote2 = {
    nome: '“Hora do Café” – Pequeno Grupo',
    itens: [
      '8 Mini Coxinhas de Frango',

      '8 Mini Almofadinhas de Carne',

      '6 Mini Enrolados de Salsicha',

      '6 Mini Almofadas de Queijo e Fiambre',

      '4 Iogurtes',

      '4 Mini Cakes',

      '4 Bolas de Berlim',
    ],
    serve: 'Até 4 pessoas',
    preco: '8.300 Kz',
  };

  pacote3 = {
    nome: 'Festa “Sabor Completo”',
    itens: [
      '20 Mini Coxinhas de Frango',

      '20 Mini Almofadinhas de Carne',

      '15 Mini Enrolados de Salsicha',

      '15 Mini Almofadas de Queijo e Fiambre',
      '10 Iogurtes',

      '10 Mini Cakes',

      '8 Bolas de Berlim',
    ],
    serve: '8 a 10 pessoas',
    preco: '20.500 Kz',
  };
}
