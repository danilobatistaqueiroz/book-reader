import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-modules',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class ModulesPage extends BasePage implements OnInit {

  override chapter: string = 'modules';

  override totalPhotos!: number[];

  override photos: string[] = [
    "20230131_130632.jpg",
    "20230131_130642.jpg",
    "20230131_130651.jpg",
    "20230131_130702.jpg",
    "20230131_130720.jpg",
    "20230131_130725.jpg",
    "20230131_130743.jpg",
    "20230131_130750.jpg",
    "20230131_130805.jpg",
    "20230131_130811.jpg",
    "20230131_130819.jpg",
    "20230131_130824.jpg",
    "20230201_135218.jpg",
    "20230201_135238.jpg",
    "20230201_135256.jpg",
    "20230201_135313.jpg",
    "20230201_135327.jpg",
    "20230201_135339.jpg",
    "20230201_135350.jpg",
    "20230201_135410.jpg",
    "20230201_135437.jpg",
    "20230201_135447.jpg",
    "20230201_135503.jpg",
    "20230201_135521.jpg",
    "20230201_135537.jpg",
    "20230201_135546.jpg",
    "20230201_135556.jpg"
  ];

  override ngOnInit() {
    this.totalPhotos = [...Array(this.photos.length).keys()];
    super.ngOnInit();
  }

}
