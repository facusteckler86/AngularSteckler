import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { HomeModule } from './navbar/pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { UsersComponent } from './pages/users/users.component';
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [NavbarComponent, MainWrapperComponent],
  imports: [CommonModule, HomeModule, UsersModule, CoreModule],
  exports: [NavbarComponent, MainWrapperComponent],
})
export class LayoutModule {}
