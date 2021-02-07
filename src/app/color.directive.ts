import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private  elRef:ElementRef) { 

    alert('Directive Runnning');

    console.log(this.elRef);
    this.elRef.nativeElement.style.color='green';
  }

}
