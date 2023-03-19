import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-vos',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class VosPage extends BasePage implements OnInit {

  override chapter: string = 'vos';

  override totalPhotos!: number[];

  override photos: string[] = [
    "20230131_130436.jpg",
    "20230131_130441.jpg",
    "20230131_130450.jpg",
    "20230131_130457.jpg",
    "20230131_130505.jpg",
    "20230131_130515.jpg",
    "20230131_130520.jpg"
  ]

  override ngOnInit() {
    this.totalPhotos = [...Array(this.photos.length).keys()];
    super.ngOnInit();
  }

}
