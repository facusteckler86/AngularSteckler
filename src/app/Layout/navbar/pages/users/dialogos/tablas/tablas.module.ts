import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas.component';
import { Users } from 'src/app/Layout/pages/users/dialogos/model';
import { CoreModule } from 'src/app/core/core.module';
import { FullNamePipe } from 'src/app/core/pipe/full-name.pipe';



@NgModule({
  declarations: [TablasComponent],
  imports: [CommonModule, CoreModule, FullNamePipe],
  exports: [TablasComponent],
})
export class TablasModule {
  displayedColumns: string[] = ['id', 'fullName', 'email'];

  @Input()
  dataSource: Users[] = [];
}
