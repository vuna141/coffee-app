import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent
    },
    {
        path: '/:id',
        component: MenuDetailComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class MenuRoutingModule { }