import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProdutosDestaqueComponent } from "./components/produtos-destaque/produtos-destaque.component";
import { ComoFuncionaComponent } from "./components/como-funciona/como-funciona.component";
import { PacotesComponent } from "./components/pacotes/pacotes.component";
import { SobreComponent } from "./components/sobre/sobre.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, ProdutosDestaqueComponent, ComoFuncionaComponent, PacotesComponent, SobreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
