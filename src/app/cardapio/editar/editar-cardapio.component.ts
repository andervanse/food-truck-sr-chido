import { Component, OnInit } from '@angular/core';
import { CardapioService } from 'src/app/services/cardapio.service';
import { Cardapio, ItemCardapio, Categoria } from 'src/app/models/cardapio.model';
import { MatDialog } from '@angular/material';
import { CardapioEditarDialogComponent } from '../editar-dialog/cardapio-editar-dialog.component';
import { CardapioExcluirDialogComponent } from '../excluir-dialog/cardapio-excluir-dialog.component';

@Component({
  selector: 'app-editar-cardapio',
  templateUrl: './editar-cardapio.component.html',
  styleUrls: ['./editar-cardapio.component.css']
})
export class EditarCardapioComponent implements OnInit {

  cardapio: Cardapio;
  uploadedFile: File;  

  constructor(
    public dialog: MatDialog,
    private cardapioService: CardapioService) { }

  ngOnInit() {
    this.cardapioService.obterCardapio().subscribe((res) => {
      console.log(res);
      this.cardapio = res;    
    });
  }

  salvarCardapio() {
    console.log(this.cardapio);
    this.cardapioService.salvarCardapio(this.cardapio).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.error(error);
    });
  }

  openEditarDialog(categoriaParam: Categoria, itemCardapioParam: ItemCardapio): void {
    
    let itemCardapioEditar = itemCardapioParam;

    if (!itemCardapioEditar) {
      itemCardapioEditar = { id:0, nome:null, descricao: null, preco: null, urlImagem: null };
    }

    const dialogRef = this.dialog.open(CardapioEditarDialogComponent, {
      width: '96%',
      data: itemCardapioEditar
    });

    dialogRef.afterClosed().subscribe(result => {
      const updateItemFnc = (categoriaIdxParam, itemIdxParam) => { 

        if (itemIdxParam == -1) {
          const lastItemIndex = this.cardapio.categorias[categoriaIdxParam].itens.length -1;
          const lastId = this.cardapio.categorias[categoriaIdxParam].itens[lastItemIndex].id + 1;
          result['id'] = lastId;
          this.cardapio.categorias[categoriaIdxParam].itens.push(result);
        } else {
          this.cardapio.categorias[categoriaIdxParam].itens[itemIdxParam] = result; 
        }
      };

      this.closeDialog(result, categoriaParam, itemCardapioParam, updateItemFnc);
    });
  }

  openExcluirDialog(categoriaParam: Categoria, itemCardapioParam: ItemCardapio): void {

    const dialogRef = this.dialog.open(CardapioExcluirDialogComponent, {
      width: '96%',
      data: itemCardapioParam
    });

    dialogRef.afterClosed().subscribe(result => {
      const deleteItemFnc = (categoriaIdxParam, itemIdxParam) => { 
        this.cardapio.categorias[categoriaIdxParam].itens.splice(itemIdxParam, 1);
      };

      this.closeDialog(result, categoriaParam, itemCardapioParam,  deleteItemFnc);
    });
  }

  private closeDialog(result: any, categoriaParam: Categoria, itemCardapioParam: ItemCardapio, actionFnc: any) {

    if (result) {
      let categoriaIdx = this.cardapio.categorias
        .findIndex(value => value.ordem == categoriaParam.ordem);

      if (categoriaIdx > -1) {
        if (itemCardapioParam !== undefined) {
          let itemIdx = this.cardapio.categorias[categoriaIdx].itens
                          .findIndex(item => item.id == itemCardapioParam.id);
          actionFnc(categoriaIdx, itemIdx);  
        } else {
          actionFnc(categoriaIdx, -1); 
        }

      }
      else {
        console.error('categoriaIndex not found.');
      }
    }
  }

  imageUpload(e, categoriaParam: Categoria) {

    if (e.target.files[0]) {
      let reader = new FileReader();
      this.uploadedFile = e.target.files[0];

      reader.onloadend = () => {
        categoriaParam['imgUpload'] = reader.result;
      }

      reader.readAsDataURL(this.uploadedFile);
    }
  }  

  createDots(word: string, length: number): string {
    return word + '  '.padEnd(length - (word.length + 2), '.');
  }

}
