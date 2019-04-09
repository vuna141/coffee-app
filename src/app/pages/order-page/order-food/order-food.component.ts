import { Component, OnInit, Input } from '@angular/core';
import { IFood } from 'src/app/interfaces/IFood';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {
  @Input() food: IFood;
  quantity: number = 0;
  constructor() { }

  ngOnInit() {
  }
  addQty() {
    this.quantity = this.quantity + 1;
  }
  minusQty() {
    if (this.quantity === 0) {
      return;
    }
    this.quantity = this.quantity - 1;
  }
}
