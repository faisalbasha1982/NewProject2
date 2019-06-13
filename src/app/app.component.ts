import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleform';

  loopField = [
    {
      name: 'one',
      type: 'data'
    },
    {
      name: 'one',
      type: 'data'
    },
    {
      name: 'one',
      type: 'data'
    },
    {
      name: 'one',
      type: 'data'
    },
    {
      name: 'one',
      type: 'data'
    },
    // {
    //   name: 'one',
    //   type: 'data'
    // },
    // {
    //   name: 'one',
    //   type: 'data'
    // },
    // {
    //   name: 'one',
    //   type: 'data'
    // }
  ];

  data = {
    settings: [{
      title: {
        name: 'string',
        type: 'string'
      },
      dropdondata: 'datatwo',
      tbox1: 0,
      boxes: {
        box1: 1,
        box2: 0,
        box3: 0
      }
    },
      {
        title: {
          name: 'string',
          type: 'string'
        },
        dropdondata: 'datathree',
        tbox1: 0,
        boxes: {
          box1: 10,
          box2: 20,
          box3: 30
        }
      },
      {
        title: {
          name: 'string',
          type: 'string'
        },
        dropdondata: 'datafour',
        tbox1: 0,
        boxes: {
          box1: 1,
          box2: 2,
          box3: 3
        }
      }
    ]
  };


}
