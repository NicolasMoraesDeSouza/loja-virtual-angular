import { Routes } from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent} from './navegacao/home/home.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';



export const rooteRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent },
    {path: 'sobre', component: SobreComponent },
    {path: 'contato', component: ContatoComponent },
    {path: 'produtos', component: ListaProdutosComponent},
    {path: 'produto-detalhe/:id', component: ListaProdutosComponent},
    {path: 'carrinho/:id', component: ListaProdutosComponent}
];
