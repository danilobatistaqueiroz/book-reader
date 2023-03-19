import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-repositories',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class PresentationPage extends BasePage implements OnInit {

  override chapter: string = 'presentation';

  override totalPhotos!: number[];

  override photos: string[] = [
    "p20230125_142521.jpg",
    "p20230125_142525.jpg",
    "p20230125_142536.jpg",
    "p20230125_142543.jpg",
    "p20230125_142547.jpg",
    "p20230125_142559.jpg",
    "p20230125_142606.jpg",
    "p20230125_142611.jpg",
    "p20230125_142620.jpg",
    "p20230125_142626.jpg",
    "p20230125_142631.jpg",
    "p20230125_142644.jpg",
    "p20230125_142651.jpg",
    "p20230125_142705.jpg",
    "p20230125_142710.jpg",
    "p20230125_142713.jpg",
    "p20230125_142730.jpg",
    "p20230125_142736.jpg",
    "p20230125_142752.jpg",
    "p20230125_142758.jpg",
    "p20230125_142811.jpg",
    "p20230125_142816.jpg",
    "p20230125_142823.jpg",
    "p20230125_142826.jpg",
    "p20230125_142843.jpg",
    "p20230125_142850.jpg",
    "p20230125_142857.jpg",
    "p20230125_142900.jpg",
    "p20230125_142910.jpg",
    "p20230125_142917.jpg",
    "p20230125_142925.jpg",
    "p20230125_142927.jpg",
    "p20230125_142951.jpg",
    "p20230125_142954.jpg",
    "p20230125_143001.jpg",
    "p20230125_143007.jpg",
    "p20230125_143013.jpg",
    "p20230125_143016.jpg",
    "p20230125_143028.jpg",
    "p20230125_143032.jpg",
    "p20230125_143038.jpg",
    "p20230125_143043.jpg",
    "p20230125_143056.jpg",
    "p20230125_143101.jpg",
    "p20230125_143106.jpg"
  ];

  override ngOnInit() {
    this.totalPhotos = [...Array(this.photos.length).keys()];
    super.ngOnInit();
  }

}
