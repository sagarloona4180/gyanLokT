import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMakeChild]'
})
export class MakeChildDirective implements OnInit {


  @Input() data = [];
  constructor(private elRef: ElementRef) {

    console.log(this.elRef.nativeElement);



    



  }

  ngOnInit(){
    // console.log(this.number);

  //   for (let i = 0; i < this.number; i++) {

  //     const li = document.createElement("li");
  //     const name = document.createTextNode("Test");
  //     li.appendChild(name);
  //     this.elRef.nativeElement.appendChild(li);
  //   }

  // }

  this.data.forEach(e=>{
    const li = document.createElement("li");
      const name = document.createTextNode(e);
      li.appendChild(name);
      this.elRef.nativeElement.appendChild(li);
  })

  }

}
