import { Component, Input } from '@angular/core';
import { IFood } from '../../../interfaces/IFood';

@Component({
    selector: 'app-food',
    templateUrl: 'food.component.html',
    styleUrls: ['food.component.scss']
})

export class FoodComponent {
    @Input() food: IFood
}