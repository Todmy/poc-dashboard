import {Component, ElementRef, Renderer, Input, Inject} from '@angular/core';
import template from './ng-gridstack-item.html';

@Component({
  selector: 'grid-stack-item',
  template,
  styles: [`
    .grid-stack-item-content {
      border: 1px solid blue;
    }
  `]
})
@Inject(ElementRef, Renderer)
export class NgGridstackItem {
  @Input('options')
  set opts(val) {
    this.options = Object.assign(this.defaultOptions, val)
  }

  constructor(elementRef: ElementRef, renderer: Renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.defaultOptions = {
      position: {
        x: 0,
        y: 0,
        width: 1,
        height: 1
      },
      resizable: true,
      dragable: true
    };
  }

  ngAfterViewInit() {
    const nativeElement = this.elementRef.nativeElement;
    this.renderer.setElementClass(nativeElement, 'grid-stack-item', true);
    this.renderer.setElementClass(nativeElement, 'ui-resizable-autohide', true);

    this.renderer.setElementAttribute(nativeElement, 'data-gs-x', String(this.options.position.x));
    this.renderer.setElementAttribute(nativeElement, 'data-gs-y', String(this.options.position.y));
    this.renderer.setElementAttribute(nativeElement, 'data-gs-width', String(this.options.position.width));
    this.renderer.setElementAttribute(nativeElement, 'data-gs-height', String(this.options.position.height));

    if (!this.options.resizable) {
      this.renderer.setElementAttribute(nativeElement, 'data-gs-no-resize', this.options.resizable ? 'no' : 'yes');
    }

    if (!this.options.dragable) {
      this.renderer.setElementAttribute(nativeElement, 'data-gs-no-move', this.options.dragable ? 'no' : 'yes');
    }
  }
}
