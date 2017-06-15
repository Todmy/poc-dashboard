import {Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import template from './ng-gridstack.html';
import Gridstack from 'gridstack';
import 'gridstack/dist/gridstack.jQueryUI';

@Component({
  selector: 'ng-gridstack',
  styles: [`
    :host {
      display: block;
      padding-bottom: 100px;
    }

    .grid-stack-item-content {
      border: 1px solid blue;
    }
  `],
  template
})
export class NgGridstack {
  @ViewChild('gridWrapper') gridElement = null

  @Input() options = {
    // alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    // resizable: {
    //     handles: 'e, se, s, sw, w'
    // }
    // disableDrag: true,
    // disableResize: true\
  }

  @Output('changed') onChange = new EventEmitter()
  @Output('dragStart') onDragStart = new EventEmitter()
  @Output('dragStop') onDragStop = new EventEmitter()
  @Output('resizeStart') onResizeStart = new EventEmitter()
  @Output('resizeStop') onResizeStop = new EventEmitter()

  @Output('changed') onResizeStop = new EventEmitter()

  ngAfterViewInit() {
    this.gridstack = new Gridstack(this.gridElement.nativeElement, this.options);
    // this.gridstack.dd.on('dragstart', (a, b) => console.log('---->', a, b));
    // this.gridstack.dd.on('change', (a, b) => console.log('---->', a, b));
  }

  test() {
    console.log('---->', arguments)
  }
}
