import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CustomMatTableComponent } from './custom-mat-table/custom-mat-table.component';
import { ToolTipTestComponent } from './tool-tip-test/tool-tip-test.component';
import { TextDateInputComponent } from './text-date-input/text-date-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/select-box', pathMatch: 'full' },
  { path: 'date-picker', component: DatePickerComponent },
  { path: 'select-box', component: SelectBoxComponent },
  { path: 'input-fields', component: InputFieldsComponent },
  { path: 'light-box', component: LightboxComponent },
  { path: 'text-editor', component: TextEditorComponent },
  { path: 'all-in-one-table', component: CustomMatTableComponent },
  { path: 'tool-tip', component: ToolTipTestComponent },
  { path: 'text-date', component: TextDateInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
