/*
          AUTHOR : GAUTAM CHANDRA SAHA
          DATE & TIME: Sat, October 23,2021 AT 20:59 
          DESCRIPTION:

*/

import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { data } from 'src/utils/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public title = 'todoApp';
  appData: any;
  constructor() {
    this.appData = { ...data, appname: this.title };
  }
}
