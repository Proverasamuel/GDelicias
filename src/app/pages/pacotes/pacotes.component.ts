import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { PacoteComponent } from "./components/pacote/pacote.component";
import { CtaComponent } from './components/cta/cta.component';

@Component({
  selector: 'app-pacotes',
  standalone: true,
  imports: [HeroComponent, PacoteComponent, CtaComponent],
  templateUrl: './pacotes.component.html',
  styleUrl: './pacotes.component.css'
})
export class PacotesComponent {
  pacotes = [
    { nome: 'Pacote Festa', itens: '20 pastéis, 10 sumos', preco: '15.000 Kz' },
    { nome: 'Pacote Light', itens: '10 pastéis, 5 iogurtes naturais', preco: '9.000 Kz' },
    { nome: 'Pacote Clássico', itens: '15 pastéis, 5 sumos, 2 iogurtes', preco: '12.000 Kz' }
  ];
}
