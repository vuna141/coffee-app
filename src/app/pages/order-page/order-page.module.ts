import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        OrderComponent,
        OrderFoodComponent
    ],
    providers: [],
})
export class OrderPageModule { }
