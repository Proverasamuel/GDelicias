import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PacotesComponent } from './pages/pacotes/pacotes.component';
import { PersonalizarComponent } from './pages/personalizar/personalizar.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    { path: 'pacotes', component: PacotesComponent },
    { path: 'personalizar', component: PersonalizarComponent },
    { path: 'produtos', component:ProdutosComponent},
    { path: 'contato', component: ContatoComponent },

];
