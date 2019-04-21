import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../services/cardapio.service';
import { Cardapio } from '../models/cardapio.model';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  
  dinamico :boolean = false;
  cardapio :Cardapio;
  
  constructor(private cardapioService: CardapioService) { }

  ngOnInit() {

    this.cardapioService.obterCardapio().subscribe((cardapio) => {
      this.cardapio = cardapio;
    })
  }

  createDots(word: string, length: number): string {
    return word + '  '.padEnd(length - (word.length + 2), '.');
  }

}
