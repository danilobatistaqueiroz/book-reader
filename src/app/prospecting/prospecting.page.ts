import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-prospecting',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class ProspectingPage extends BasePage implements OnInit {

  override chapter: string = 'prospecting';

  override totalPhotos!: number[];

  override photos: string[] = [
    "20230131_195804.jpg",
    "20230131_195811.jpg",
    "20230131_195824.jpg",
    "20230131_195829.jpg",
    "20230131_195840.jpg",
    "20230131_195846.jpg",
    "20230131_195901.jpg",
    "20230131_195909.jpg",
    "20230131_195928.jpg",
    "20230131_195938.jpg",
    "20230131_195946.jpg",
    "20230131_195953.jpg",
    "20230131_200009.jpg",
    "20230131_200014.jpg",
    "20230131_200021.jpg",
    "20230131_200025.jpg",
    "20230131_200040.jpg",
    "20230131_200047.jpg",
    "20230131_200101.jpg",
    "20230131_200107.jpg",
    "20230131_200113.jpg",
    "20230131_200137.jpg",
    "20230131_200148.jpg",
    "20230131_200152.jpg",
    "20230131_200201.jpg",
    "20230131_200207.jpg",
    "20230131_200217.jpg",
    "20230131_200222.jpg",
    "20230131_200228.jpg",
    "20230131_200233.jpg"
  ]

  override ngOnInit() {
    this.totalPhotos = [...Array(this.photos.length).keys()];
    super.ngOnInit();
  }

}
