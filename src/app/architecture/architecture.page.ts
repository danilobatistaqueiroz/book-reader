import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-architecture',
  templateUrl: '../base/base.page.html',
  styleUrls: ['../base/base.page.scss'],
})
export class ArchitecturePage extends BasePage {

  override chapter: string = 'architecture';

  override totalPhotos: number[] = [...Array(31).keys()];

  override photos: string[] = [
    "20230131_130010.jpg",
    "20230131_130021.jpg",
    "20230131_130027.jpg",
    "20230131_130037.jpg",
    "20230131_130046.jpg",
    "20230131_130051.jpg",
    "20230131_130057.jpg",
    "20230131_130102.jpg",
    "20230131_130107.jpg",
    "20230131_130119.jpg",
    "20230131_130125.jpg",
    "20230131_130131.jpg",
    "20230131_130138.jpg",
    "20230131_130147.jpg",
    "20230131_130153.jpg",
    "20230131_130158.jpg",
    "20230131_130202.jpg",
    "20230201_135840.jpg",
    "20230201_135849.jpg",
    "20230201_135911.jpg",
    "20230201_135920.jpg",
    "20230201_135937.jpg",
    "20230201_135944.jpg",
    "20230201_135958.jpg",
    "20230201_140008.jpg",
    "20230201_140018.jpg",
    "20230201_140030.jpg",
    "20230201_140117.jpg",
    "20230201_140128.jpg",
    "20230201_140140.jpg",
    "20230201_140149.jpg",
    "20230201_140158.jpg",
    "20230201_140205.jpg",
    "20230201_140209.jpg",
    "20230201_140227.jpg",
    "20230201_140237.jpg",
    "20230201_140248.jpg",
    "20230201_140256.jpg",
    "20230201_140313.jpg",
    "20230201_140327.jpg",
    "20230201_140333.jpg",
    "20230201_140340.jpg",
    "20230201_140400.jpg",
    "20230201_140431.jpg",
    "20230201_140441.jpg",
    "20230201_140454.jpg",
    "20230201_140501.jpg",
    "20230201_140517.jpg",
    "20230201_140530.jpg",
    "20230201_140546.jpg",
    "20230201_140555.jpg",
    "20230201_140603.jpg",
    "20230201_140625.jpg",
    "20230201_140644.jpg",
    "20230201_140651.jpg",
    "20230201_140701.jpg",
    "20230201_140708.jpg",
    "20230201_140746.jpg",
    "20230201_140753.jpg",
    "20230201_140819.jpg",
    "20230201_140832.jpg",
    "20230201_140851.jpg",
    "20230201_140901.jpg",
    "20230201_140912.jpg",
    "20230201_140921.jpg",
    "20230201_140949.jpg",
    "20230201_140958.jpg",
    "20230201_141004.jpg",
    "20230201_141018.jpg",
    "20230201_141023.jpg",
    "20230201_141037.jpg",
    "20230201_141048.jpg",
    "20230201_141106.jpg",
    "20230201_141113.jpg",
    "20230201_141130.jpg",
    "20230201_141139.jpg",
    "20230201_141150.jpg",
    "20230201_141158.jpg",
    "20230201_141233.jpg",
    "20230201_141243.jpg",
    "20230201_141254.jpg",
    "20230201_141303.jpg",
    "20230201_141319.jpg",
    "20230201_141329.jpg",
    "20230201_141412.jpg",
    "20230201_141426.jpg",
    "20230201_141503.jpg",
    "20230201_141512.jpg",
    "20230201_141516.jpg",
    "20230201_141532.jpg",
    "20230201_141542.jpg",
    "20230201_141601.jpg",
    "20230201_141609.jpg",
    "20230201_141618.jpg",
    "20230201_141634.jpg",
    "20230201_141644.jpg",
    "20230201_141651.jpg",
    "20230201_141659.jpg",
    "20230201_141707.jpg",
    "20230201_141712.jpg",
    "20230201_141726.jpg",
    "20230201_141732.jpg",
    "20230201_141747.jpg",
    "20230201_141756.jpg",
    "20230201_141837.jpg",
    "20230201_141848.jpg",
    "20230201_141921.jpg",
    "20230201_141948.jpg",
    "20230201_142027.jpg",
    "20230201_142034.jpg",
    "20230201_142038.jpg",
    "20230201_142055.jpg",
    "20230201_142109.jpg",
    "20230201_142121.jpg",
    "20230201_142130.jpg",
    "20230201_153108.jpg",
    "20230201_153116.jpg",
    "20230201_153120.jpg",
    "20230201_153129.jpg",
    "20230201_153135.jpg",
    "20230201_153150.jpg",
    "20230201_153157.jpg",
    "20230201_153203.jpg",
    "20230201_153215.jpg",
    "20230201_153218.jpg",
    "20230201_153225.jpg",
    "20230201_153232.jpg",
    "20230201_153238.jpg"
  ];

  override ngOnInit() {
    this.totalPhotos = [...Array(this.photos.length).keys()];
    super.ngOnInit();
  }

}
