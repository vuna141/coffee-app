import { Injectable } from '@angular/core';
import { IFood } from '../../../interfaces/IFood';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
  constructor(private http: HttpClient) { }

  getFoods() {
    // return this.foods
    const token = localStorage.getItem('token')
    return this.http.get(`https://lexuanquynh.com/foods?access_token=${token}`).pipe(
      map((res: any) => {
        const result = res.rows.map(x => {
          const food: IFood = {
            id: x.id,
            name: x.name,
            cover: x.pictures[0],
            price: x.price,
            content: 'N/A'
          }
          return food
        }) as IFood[]
        return result;
      })
    )
  }

  getFoodById(id: String) {
    // const found = this.foods.find(function(value) {
    //   return value.id === id;
    // });
    // return found;

    const token = localStorage.getItem('token')
    return this.http.get(`https://lexuanquynh.com/foods/${id}?access_token=${token}`).pipe(
      map((res: any) => {
          const food: IFood = {
            id: res.id,
            name: res.name,
            cover: res.pictures[0],
            price: res.price,
            content: 'N/A'
          }
          return food
      })
    )
  }
}
