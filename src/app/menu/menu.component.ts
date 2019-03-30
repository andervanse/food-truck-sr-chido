import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  dinamico :boolean = true;
  menu :Menu;
  
  constructor(private menuService: MenuService) { }

  ngOnInit() {

    this.menuService.obterMenu().subscribe((menu) => {
      this.menu = menu;
    })
  }

  createDots(word: string, length: number): string {
    return word + '     '.padEnd(length, '.');
  }

}
