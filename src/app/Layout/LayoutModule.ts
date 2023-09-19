import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { HomeModule } from './navbar/pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { UsersComponent } from './pages/users/users.component';
import { CoreModule } from '../core/core.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [NavbarComponent, MainWrapperComponent],
  imports: [
    CommonModule,
    HomeModule,
    UsersModule,
    CoreModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [NavbarComponent, MainWrapperComponent],
})
export class LayoutModule {}
