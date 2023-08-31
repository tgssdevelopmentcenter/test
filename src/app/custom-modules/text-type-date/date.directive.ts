import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: 'input[textDate]'
})
export class TextDateInputDirective {
    constructor(private elementRef: ElementRef) { }


    @HostListener('input', ['$event']) onInputChange(event) {
        let value = this.elementRef.nativeElement.value;
        const reg = new RegExp(/^[0-9]/)
        const initalValue = this.elementRef.nativeElement.value;
        if (reg.test(event?.data)) {
            switch (value.length) {
                case 2: {
                    this.elementRef.nativeElement.value = `${value}-`
                }
                    break
                case 5: {
                    this.elementRef.nativeElement.value = `${value}-`
                }
                    break
            }
        } else {
            this.elementRef.nativeElement.value = initalValue.replace(/[^0-9\-]*/g, '');
            event.stopPropagation();
        }

    }
}

// 28-10-1998
//(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/g
// /[^0-9]*/g

// ^[0-9\-]+$
// //^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](18|19|20)\d\d$/g, ''
/**
 *     console.log(value)
        switch (value.length) {
            case 2: {
                this.elementRef.nativeElement.value = value + '-'
            }
                break
            case 5: {
                this.elementRef.nativeElement.value = value + '-'
            }
                break
        }
 */