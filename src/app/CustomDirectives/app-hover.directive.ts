import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  
  @HostBinding('style.backgroundColor') backgroundColor: string = '#282828';

  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') color: string = 'white';
  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor='white';
    this.border='#282828 2px solid ';
    this.color='#282828';
  }
  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor='#282828';
    this.border='none';
    this.color='white';
  }
}
