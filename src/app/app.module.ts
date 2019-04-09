import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { TablePageModule } from './pages/table-page/table-page.module';
import { LayoutModule } from './layout/layout.module';
import { MenuPageModule } from './pages/menu-page/menu-page.module';
import { OrderPageModule } from './pages/order-page/order-page.module';
import { AppRoutingModule } from './app.routing';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  // De khai bao component, directive, pipe
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TablePageModule,
    LayoutModule,
    OrderPageModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Providers de khai bao cac service 
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
