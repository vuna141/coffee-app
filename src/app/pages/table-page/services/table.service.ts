import { Injectable } from '@angular/core';
import { ITable } from '../../../interfaces/ITable';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class TableService {
  tables: ITable[] = [{
    name: 'Table 1',
    status: 0
  }, {
    name: 'Table 2',
    status: 0
  }, {
    name: 'Table 3',
    status: 1,
    customer: 'Ho Chi Minh',
    order: 3
  },
  {
    name: 'Table 4',
    status: 1,
    customer: 'Ho Chi Minh',
    order: 3
  }];

  constructor(private http: HttpClient) {
  }

  getTables() {
    const token = localStorage.getItem('token');
    return this.http.get(`https://lexuanquynh.com/tables?access_token=${token}`)
      .pipe(tap(res => {
      }), map((res: any[]) => {
        console.log(res)
        const tables = res.map(x => {
          const table: ITable = {
            customer: x.customerName,
            name: x.name,
            order: x.numberOrder,
            status: x.status
          };
          return table;
        });
        return tables;
      }));
  }
}
