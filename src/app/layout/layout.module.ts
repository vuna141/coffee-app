import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MenuBarComponent
    ],
    providers: [],
})
export class LayoutModule { }
