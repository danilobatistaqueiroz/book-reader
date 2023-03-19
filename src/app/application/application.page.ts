import { Component } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-application',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class ApplicationPage extends BasePage {

  override chapter: string = 'application';

  override totalPhotos: number[] = [...Array(31).keys()];

  override photos: string[] = [
    '20230125_141946.jpg',
    '20230125_141952.jpg',
    '20230125_142003.jpg',
    '20230125_142011.jpg',
    '20230125_142019.jpg',
    '20230125_142025.jpg',
    '20230125_142035.jpg',
    '20230125_142041.jpg',
    '20230125_142048.jpg',
    '20230125_142054.jpg',
    '20230125_142106.jpg',
    '20230125_142113.jpg',
    '20230125_142127.jpg',
    '20230125_142132.jpg',
    '20230125_142136.jpg',
    '20230125_142146.jpg',
    '20230125_142153.jpg',
    '20230125_142201.jpg',
    '20230125_142209.jpg',
    '20230125_142223.jpg',
    '20230125_142228.jpg',
    '20230125_142237.jpg',
    '20230125_142243.jpg',
    '20230125_142254.jpg',
    '20230125_142257.jpg',
    '20230125_142303.jpg',
    '20230125_142306.jpg',
    '20230125_142319.jpg',
    '20230125_142323.jpg',
    '20230125_142332.jpg',
    '20230125_142343.jpg'
  ];

  override ngOnInit() {
    this.totalPhotos = [...Array(this.photos.length).keys()];
    super.ngOnInit();
  }
}
