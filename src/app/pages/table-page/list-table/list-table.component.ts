import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { ITable } from 'src/app/interfaces/ITable';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  tables: ITable[];
  isList: Boolean = false
  // Dung de inject Table Service vao trong 1 component
  constructor(public tableSvc: TableService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    const display = this.route.snapshot.queryParams.display 
    if(display === 'list') {
      this.isList = true
    }
    this.tables = this.tableSvc.tables;
  }

}
