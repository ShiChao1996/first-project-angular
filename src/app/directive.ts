import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AnimationService } from './animate/animation';
@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef,public animate:AnimationService) { }
  @HostListener('mouseup') onMouseEnter() {
    console.log(this.el.nativeElement.children);
    this.active = !this.active;
    if(this.active){
      this.animate.startMove(this.el.nativeElement.children[1],{height:200})
    }
    else
      this.animate.startMove(this.el.nativeElement.children[1],{height:0})
  }
  active:boolean = false;
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
