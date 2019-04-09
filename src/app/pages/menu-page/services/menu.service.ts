import { Injectable } from '@angular/core';
import { IFood } from '../../../interfaces/IFood';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private foods: IFood[] = [
    {
      id: '1',
      name: 'MOCHA',
      price: 35000,
      content: 'Lorem',
      cover: 'assets/foodpic.jpg'
    },
    {
      id: '2',
      name: 'MOCHA 2',
      price: 35000,
      content: 'Lorem',
      cover: 'assets/foodpic.jpg'
    },
    {
      id: '3',
      name: 'MOCHA 3',
      price: 35000,
      content: 'Lorem',
      cover: 'assets/foodpic.jpg'
    },
    {
      id: '4',
      name: 'MOCHA 4',
      price: 35000,
      content: 'Lorem',
      cover: 'assets/foodpic.jpg'
    }
  ]
  constructor() { }

  getFoods() {
    return this.foods;
  }

  getFoodById(id: String) {
    const found = this.foods.find(function(value) {
      return value.id === id;
    });
    return found;
  }
}
