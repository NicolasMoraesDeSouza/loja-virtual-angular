import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { rooteRouterConfig } from './app.route';
import { APP_BASE_HREF } from '@angular/common';
import { from } from 'rxjs';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { ProdutoService } from './produtos/produto.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    ListaProdutosComponent,
    
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rooteRouterConfig, { useHash: false})],
  FormsModule,
  HttpClientModule],
  
  providers: [
    ProdutoService,
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }