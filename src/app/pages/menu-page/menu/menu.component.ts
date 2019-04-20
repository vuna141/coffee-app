import { Component, OnInit } from '@angular/core';
import { IFood } from '../../../interfaces/IFood';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foods: IFood[]
  constructor(private menuSvc: MenuService) { }

  ngOnInit() {
    this.menuSvc.getFoods().subscribe(data => {
      this.foods = data
    });
  }

}
