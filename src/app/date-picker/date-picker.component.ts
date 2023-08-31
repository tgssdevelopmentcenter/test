import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { TwoDateValidator } from '../core/custom-validations/date-validations';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {



  createForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.initialForm()
  }



  initialForm() {
    this.createForm = new FormGroup({
      simple: new FormControl('', [Validators.required]),
      fromDate: new FormControl(''),
      toDate: new FormControl('')
    }, { validators: [TwoDateValidator.validate('fromDate', 'toDate')] })
  }


}
