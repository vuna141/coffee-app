import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableName: string = 'Table'
  @Input() tableStatus: number = 0;
  @Input() customerName: string = 'N/A'
  @Input() totalOrder: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
