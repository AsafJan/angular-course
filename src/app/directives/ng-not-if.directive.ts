import { Directive, Input, ViewContainerRef, TemplateRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[NgNotIf]'
})
export class NgNotIfDirective implements AfterContentInit {

  condition: boolean;

  @Input() set NgNotIf(condition: boolean) {
    this.condition = condition;
  }

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }

  ngAfterContentInit(): void {
    if (!this.condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }

}
