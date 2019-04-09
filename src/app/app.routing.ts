import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { LayoutComponent } from './layout/layout.component';
import { ListTableComponent } from './pages/table-page/list-table/list-table.component';
import { OrderComponent } from './pages/order-page/order/order.component';
import { MenuComponent } from './pages/menu-page/menu/menu.component';
import { MenuDetailComponent } from './pages/menu-page/menu-detail/menu-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      canActivate: [AuthGuard],
      path: 'home',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'tables',
          pathMatch: 'full'
        },
        {
          path: 'tables',
          component: ListTableComponent
        },
        {
          path: 'order',
          component: OrderComponent
        },
        {
          path: 'menu',
          loadChildren: './pages/menu-page/menu-page.module#MenuPageModule'
        },
        {
          path: 'profile',
          loadChildren: './pages/profile-page/profile-page.module#ProfilePageModule'
        }
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }