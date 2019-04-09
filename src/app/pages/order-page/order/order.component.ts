import { Component, OnInit } from '@angular/core';
import { IFood } from '../../../interfaces/IFood';
import { MenuService } from '../../menu-page/services/menu.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  foods : IFood[];
  constructor(private menuSvc: MenuService) { }

  ngOnInit() {
    this.foods = this.menuSvc.getFoods();
  }

}
