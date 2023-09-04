import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  createForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      test1: new FormControl('', [Validators.required]),
      test2: new FormControl('', [Validators.required]),
    });
  }
}
