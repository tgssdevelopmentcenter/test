import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMatTableComponent } from './custom-mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';



@NgModule({
  declarations: [
    CustomMatTableComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule

  ],
  exports: [CustomMatTableComponent]
})
export class AllInOneTableModule { }
