import {Directive, Renderer, ElementRef, Inject, NgZone} from '@angular/core';
import dragula from 'dragula';

@Directive({
  selector: '[dragable-dashboard]'
})
@Inject(Renderer, ElementRef, NgZone)
export class DragableDashboardDirective {
  constructor (renderer: Renderer, elementRef: ElementRef, zone: NgZone) {
    this.renderer = renderer
    this.elementRef = elementRef
    this.zone = zone;
  }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'flex');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'flex-wrap', 'wrap');
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.container = this.createContainer()
    })
  }

  createContainer() {
    const drake = dragula([this.elementRef.nativeElement], {
      direction: 'horizontal',
      moves: (element, container, handle) => {
        return handle.getAttribute('movable') === 'true'
      },
      accepts: (element, target, source, sibling) => {
        const siblingElement = sibling || target.children[target.children.length - 1]
        return !element.hasAttribute('reorder-group') ||
          element.getAttribute('reorder-group') === siblingElement.getAttribute('reorder-group')
      }
    })

    drake.on('drag', element => {
      this.pickedElementAt = this.indexOf(element)
    })

    drake.on('drop', element => {
      const event = { from: this.pickedElementAt, to: this.indexOf(element) }

      if (event.from !== event.to) {
        event.applyTo = array => this.reorder(array, event)
      }

      this.pickedElementAt = -1
    })

      console.log('=====', drake)
    return drake
  }

  indexOf(element) {
    return Array.from(element.parentNode.children).indexOf(element)
  }

  reorder(array, indexes) {
    const element = array[indexes.from]

    array.splice(indexes.from, 1)
    array.splice(indexes.to, 0, element)

    return array
  }

  ngOnDestroy() {
    if (this.container) {
      this.container.destroy()
    }
  }
}
