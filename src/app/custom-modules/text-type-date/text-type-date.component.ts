import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'text-date',
  templateUrl: './text-type-date.component.html',
  styleUrls: ['./text-type-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextTypeDateComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextTypeDateComponent),
      multi: true,
    },
  ],
})
export class TextTypeDateComponent implements OnInit, OnChanges, AfterViewInit {


  @ViewChild('textInput', { static: true }) textInput: any
  constructor() {

  
  }

  ngOnInit(): void {
    // this.textInput._handleKeydown = (event: KeyboardEvent) => {
    //   var key = event?.keyCode;
    //   if ((key >= 48 && key <= 57)) return;
    //   if (!this.textInput.disabled) {
    //     this.textInput.panelOpen
    //       ? this.textInput._handleOpenKeydown(event)
    //       : this.textInput._handleClosedKeydown(event);
    //   }
    // };
  }

  ngOnChanges(changes: SimpleChanges) {
  }


  ngAfterViewInit(): void {
  }

  onKeyPress(event: KeyboardEvent) {
    // var key = event.which || event?.keyCode;
    // if (key >= 48 && key <= 57)
    //   // to check whether pressed key is number or not 
    //   return true;
    // else return false;
  }


}
