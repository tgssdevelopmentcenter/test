import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectBoxComponent } from './select-box/select-box.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { SelectBoxModule } from './custom-modules/select-box/select-box.module';
import { TextEditorModule } from './custom-modules/text-editor/text-editor.module';
import { CustomMatTableComponent } from './custom-mat-table/custom-mat-table.component';
import { AllInOneTableModule } from './custom-modules/all-in-one-table/all-in-one-table.module';
import { CustomTooltipModule } from './custom-modules/cutom-tooltip/custom-tooltip.module';
import { ToolTipTestComponent } from './tool-tip-test/tool-tip-test.component';
@NgModule({
  declarations: [
    AppComponent,
    SelectBoxComponent,
    DatePickerComponent,
    TextEditorComponent,
    InputFieldsComponent,
    LightboxComponent,
    CustomMatTableComponent, ToolTipTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModuleModule,
    SelectBoxModule,
    TextEditorModule,
    AllInOneTableModule,
    CustomTooltipModule,
    HttpClientModule

  ],
  exports: [SelectBoxModule, CustomTooltipModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
