import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemCardapio } from 'src/app/models/cardapio.model';

@Component({
  selector: 'app-cardapio-excluir-dialog',
  templateUrl: './cardapio-excluir-dialog.component.html',
  styleUrls: ['./cardapio-excluir-dialog.component.css']
})
export class CardapioExcluirDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CardapioExcluirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemCardapio) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
