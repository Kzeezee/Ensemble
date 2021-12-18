import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private element: ElementRef) { }

   @HostListener('click')
   next() {
     //get the slider-main class
    var e = this.element.nativeElement.parentElement.parentElement.children[0];
    var item = e.getElementsByClassName("event-item");
    e.append(item[0]);    
   } 

}
