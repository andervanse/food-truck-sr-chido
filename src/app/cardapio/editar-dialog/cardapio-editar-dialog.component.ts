import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemCardapio } from '../../models/cardapio.model';

@Component({
  selector: 'app-cardapio-editar-dialog',
  templateUrl: './cardapio-editar-dialog.component.html',
  styleUrls: ['./cardapio-editar-dialog.component.css']
})
export class CardapioEditarDialogComponent implements OnInit {

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<CardapioEditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemCardapio) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
