import {Component} from '@angular/core';

const vidgetSufix = 'data-gs';

@Component({
  selector: 'fountain-app',
  template: require('./main.html'),
  styles: [`
    [gridStackItem] {
      border: 1px solid blue;
    }
  `]
})
export class MainComponent {
  constructor() {
    this.defaultOptions = [
      {
        name: 'test1',
        position: {
          x: 0,
          y: 0,
          width: 1,
          height: 1
        }
      },
      {
        name: 'test2',
        position: {
          x: 0,
          y: 1,
          width: 1,
          height: 1
        }
      },
      {
        name: 'test3',
        position: {
          x: 1,
          y: 0,
          width: 1,
          height: 1
        }
      },
      {
        name: 'test4',
        position: {
          x: 1,
          y: 1,
          width: 1,
          height: 1
        }
      },
      {
        name: 'test5',
        position: {
          x: 2,
          y: 0,
          width: 1,
          height: 1
        }
      },
      {
        name: 'test6',
        position: {
          x: 2,
          y: 1,
          width: 1,
          height: 1
        }
      }
    ];
  }
}
