
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtosList : Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        produtosResult => {
            this.produtosList = produtosResult;
            console.log(produtosResult);
        },
        error => console.log(error)
      );
  }
}