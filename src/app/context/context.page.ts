import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-context',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class ContextPage extends BasePage implements OnInit {

  override chapter: string = 'context';

  override totalPhotos!: number[];

  override photos: string[] = [
    "20230131_125155.jpg",
    "20230131_125210.jpg",
    "20230131_125228.jpg",
    "20230131_125233.jpg",
    "20230131_125241.jpg",
    "20230131_125247.jpg",
    "20230131_125252.jpg",
    "20230131_125301.jpg",
    "20230131_125309.jpg",
    "20230131_125315.jpg",
    "20230131_125319.jpg",
    "20230131_125336.jpg",
    "20230131_125343.jpg",
    "20230131_125348.jpg",
    "20230131_125356.jpg",
    "20230131_125404.jpg",
    "20230131_125408.jpg",
    "20230131_125431.jpg",
    "20230131_125440.jpg",
    "20230131_125444.jpg",
    "20230131_125450.jpg",
    "20230131_125454.jpg",
    "20230131_125459.jpg",
    "20230131_125506.jpg",
    "20230131_125511.jpg",
    "20230131_125522.jpg",
    "20230131_125526.jpg",
    "20230131_125531.jpg",
    "20230131_125538.jpg",
    "20230131_125543.jpg",
    "20230131_125549.jpg",
    "20230131_125554.jpg",
    "20230131_125600.jpg",
    "20230131_125618.jpg",
    "20230131_125625.jpg",
    "20230131_125632.jpg",
    "20230131_125638.jpg",
    "20230131_125642.jpg",
    "20230131_125649.jpg",
    "20230131_125656.jpg",
    "20230131_125706.jpg",
    "20230131_125710.jpg",
    "20230131_125720.jpg",
    "20230131_125726.jpg",
    "20230131_125732.jpg",
    "20230131_125736.jpg",
    "20230131_125753.jpg",
    "20230131_125800.jpg",
    "20230131_125812.jpg",
    "20230131_125820.jpg",
    "20230131_125840.jpg",
    "20230131_125849.jpg",
    "20230131_125859.jpg",
    "20230131_125904.jpg",
    "20230131_125912.jpg",
    "20230131_125918.jpg",
    "20230131_125926.jpg",
    "20230131_125932.jpg"
]

override ngOnInit() {
  this.totalPhotos = [...Array(this.photos.length).keys()];
  super.ngOnInit();
}

}
