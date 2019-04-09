import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from 'src/app/interfaces/IMenu';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

menus: IMenu[] = [{
    icon: 'assets/coffee-nut.png',
    name: 'Menu',
    iconActive: 'assets/coffee-nut-color.png',
    active: false
  },
  {
    icon: 'assets/order.png',
    name: 'Order',
    iconActive: 'assets/order-color.png',
    active: false
  },
  {
    icon: 'assets/user.png',
    name: 'User',
    iconActive: 'assets/user-color.png',
    active: false
  }
]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTapMenu(item){
    this.menus.forEach((value) => {
      value.active = false;
    })
    item.active = true;
    if(item.name === 'Menu') {
      this.router.navigate(['/home/menu'])
    }
    if(item.name === 'Order') {
      this.router.navigate(['/home/tables'])
    }
    if(item.name === 'User') {
      this.router.navigate(['/home/profile'])
    }
  }
}
