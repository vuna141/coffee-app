import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food/food.component';
import { MenuService } from './services/menu.service';
import { MenuRoutingModule } from './menu.routing';


@NgModule({
    imports: [
        CommonModule,
        MenuRoutingModule
    ],
    exports: [],
    declarations: [
        MenuComponent,
        MenuDetailComponent,
        FoodComponent
    ],
    providers: [
        MenuService
    ],
})
export class MenuPageModule { }
