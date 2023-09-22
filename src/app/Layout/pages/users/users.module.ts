import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogosComponent } from './dialogos/dialogos.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TablasComponent } from '../../navbar/pages/users/dialogos/tablas/tablas.component';




@NgModule({
  declarations: [UsersComponent, DialogosComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    TablasComponent,
  ],
  exports: [UsersComponent, DialogosComponent],
})
export class UsersModule {}
