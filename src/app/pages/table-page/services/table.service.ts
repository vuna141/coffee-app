import { Injectable } from '@angular/core';
import { ITable } from '../../../interfaces/ITable';

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
}