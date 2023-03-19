import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-services',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class ServicesPage extends BasePage implements OnInit {

  override chapter: string = 'services';

  override totalPhotos!: number[];

  override photos: string[] = [
    "20230124_235453.jpg",
    "20230124_235459.jpg",
    "20230124_235515.jpg",
    "20230124_235527.jpg",
    "20230124_235539.jpg",
    "20230124_235545.jpg",
    "20230124_235601.jpg",
    "20230124_235628.jpg",
    "20230124_235638.jpg",
    "20230124_235645.jpg",
    "20230124_235717.jpg",
    "20230124_235728.jpg",
    "20230124_235735.jpg",
    "20230124_235744.jpg",
    "20230124_235752.jpg",
    "20230124_235809.jpg",
    "20230124_235819.jpg",
    "20230124_235848.jpg",
    "20230124_235856.jpg",
    "20230124_235909.jpg",
    "20230124_235922.jpg",
    "20230124_235936.jpg",
    "20230124_235943.jpg",
    "20230124_235954.jpg",
    "20230125_000003.jpg",
    "20230125_000013.jpg",
    "20230125_000021.jpg",
    "20230131_123441.jpg",
    "20230131_123456.jpg",
    "20230131_123548.jpg",
    "20230131_123604.jpg",
    "20230131_123633.jpg",
    "20230131_123643.jpg",
    "20230131_123655.jpg",
    "20230131_123708.jpg",
    "20230131_123730.jpg",
    "20230131_123742.jpg",
    "20230131_123752.jpg",
    "20230131_123758.jpg",
    "20230131_123807.jpg",
    "20230131_123813.jpg"
  ]

  override ngOnInit() {
    this.totalPhotos = [...Array(this.photos.length).keys()];
    super.ngOnInit();
  }

}
