import { Directive, ElementRef, Input, Renderer2, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterContentInit {
  @Input() color = 'yellow';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit(): void {
    // this.element.nativeElement.style.color = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }

}
