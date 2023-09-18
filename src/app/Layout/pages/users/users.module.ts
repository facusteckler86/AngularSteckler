import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogosComponent } from './dialogos/dialogos.component';
import { CoreModule } from 'src/app/core/core.module';




@NgModule({
  declarations: [UsersComponent, DialogosComponent],
  imports: [
    CommonModule,CoreModule,
  ],
  exports: [UsersComponent, DialogosComponent],
})
export class UsersModule {}
