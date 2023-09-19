import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UsersModule } from '../../../pages/users/users.module';
import { CoreModule } from 'src/app/core/core.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, UsersModule, CoreModule, MatCardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
