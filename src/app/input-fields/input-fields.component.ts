import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss'],
})
export class InputFieldsComponent implements OnInit {
  emailRef = /^[\w-\._\+%]+@(technogenesis\.in)/;
  constructor() {}

  ngOnInit(): void {}
}
