import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { colors } from '../custom-modules/custom-funtions';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  createForm: FormGroup;
  data = colors
  constructor(

  ) {

  }

  ngOnInit(): void {
    this.initialForm()
  }


  initialForm() {
    this.createForm = new FormGroup({
      singleStatic: new FormControl('', [Validators.required]),
      singleApi: new FormControl('', [Validators.required]),
      multipleStatic: new FormControl('', [Validators.required]),
      multipleApi: new FormControl('', [Validators.required]),
    })
  }


  submit() {
    console.log(this.createForm.value)
  }
}
