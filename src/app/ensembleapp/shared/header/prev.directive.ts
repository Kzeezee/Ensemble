import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click')
  prev() {
    //get the slider-main class
   var e = this.element.nativeElement.parentElement.parentElement.children[0];
   var item = e.getElementsByClassName("event-item");
   e.prepend(item[item.length-1]);    
  } 

}