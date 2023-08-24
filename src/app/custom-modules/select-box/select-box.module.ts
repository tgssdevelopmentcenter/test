import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { SingleStaticComponent } from './single-static/single-static.component';
import { SingleApiComponent } from './single-api/single-api.component';
import { MultipleApiComponent } from './multiple-api/multiple-api.component';
import { MultipleStaticComponent } from './multiple-static/multiple-static.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SingleStaticComponent,
    SingleApiComponent,
    MultipleApiComponent,
    MultipleStaticComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SingleStaticComponent,
    SingleApiComponent,
    MultipleApiComponent,
    MultipleStaticComponent]
})
export class SelectBoxModule { }
