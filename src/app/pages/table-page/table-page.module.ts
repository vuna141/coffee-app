import { NgModule } from '@angular/core';
import { ListTableComponent } from './list-table/list-table.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { TableService } from './services/table.service';
import { StatusPipe } from './pipes/status.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
    ],
    declarations: [
        ListTableComponent,
        TableComponent,
        StatusPipe
    ],
    providers: [
        TableService
    ],
})
export class TablePageModule { }
