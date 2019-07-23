import { Directive, Output, EventEmitter, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInfinitLoop]'
})
export class InfinitLoopDirective implements OnInit {
  @Output() endOfPageDetected: EventEmitter<any> = new EventEmitter<any>();
  @Input() isLoading = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll')
  scrollDetected() {
    if (this.isLoading) { return };

    if (this.getDistanceFromBottom() < 50) {
      this.endOfPageDetected.emit(null);
    }
  }

  getDistanceFromBottom() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
  }
}
