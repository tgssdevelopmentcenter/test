import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  description: FormControl
  constructor() {

  }

  ngOnInit(): void {

    this.description = new FormControl('')
  }

}
