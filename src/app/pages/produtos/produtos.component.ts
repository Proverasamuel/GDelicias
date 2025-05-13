import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { FiltroComponent } from "./components/filtro/filtro.component";
import { ProdutoComponent } from "./components/produto/produto.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [HeroComponent, FiltroComponent, ProdutoComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
