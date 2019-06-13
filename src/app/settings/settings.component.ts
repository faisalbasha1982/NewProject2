import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {
  @Input() setting;
  @Input() iteration;
  showbox = true;
  dropdown = [
    'dataone',
    'datatwo',
    'datathree',
    'datafour'
  ];

  defaultSettings = {
    title: {
      name: 'Default Value',
      type: 'string'
    },
    dropdondata: 'dataone',
    tbox1: 0,
    boxes: {
      box1: 'Default Value',
      box2: 'Default Value',
      box3: 'Default Value'
    }
  };

  constructor() {
  }

  ngOnInit() {
    if (!this.setting) {
      this.setting = this.defaultSettings;
    }
  }

}
