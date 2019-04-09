import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFood } from '../../../interfaces/IFood';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  food: IFood;
  constructor(private route: ActivatedRoute, private menuSvc: MenuService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.food = this.menuSvc.getFoodById(id)
  }

}
