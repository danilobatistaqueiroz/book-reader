import { Component, OnInit, ViewChild } from '@angular/core';
import { CapacitorVolumeButtons, VolumeButtonPressed } from 'capacitor-volume-buttons';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  totalPhotos: number[] = [...Array(43 + 1).keys()];

  photos: string[] = ["000.jpg", 
  "20230124_232932.jpg",
  "20230124_232954.jpg",
  "20230124_233356.jpg",
  "20230124_233419.jpg",
  "20230124_233551.jpg",
  "20230124_233604.jpg",
  "20230124_233655.jpg",
  "20230124_233708.jpg",
  "20230124_233743.jpg",
  "20230124_233756.jpg",
  "20230124_233821.jpg",
  "20230124_233849.jpg",
  "20230124_233906.jpg",
  "20230124_233922.jpg",
  "20230124_233939.jpg",
  "20230124_233945.jpg",
  "20230124_234026.jpg",
  "20230124_234037.jpg",
  "20230124_234043.jpg",
  "20230124_234058.jpg",
  "20230124_234110.jpg",
  "20230124_234213.jpg",
  "20230124_234223.jpg",
  "20230124_234251.jpg",
  "20230124_234256.jpg",
  "20230124_234302.jpg",
  "20230124_234307.jpg",
  "20230124_234345.jpg",
  "20230124_234351.jpg",
  "20230124_234416.jpg",
  "20230124_234422.jpg",
  "20230124_234429.jpg",
  "20230124_234446.jpg",
  "20230124_234452.jpg",
  "20230124_234457.jpg",
  "20230124_234507.jpg",
  "20230124_234517.jpg",
  "20230124_234522.jpg",
  "20230124_234537.jpg",
  "20230124_234550.jpg",
  "20230124_234605.jpg",
  "20230124_234611.jpg",
  "20230124_234616.jpg"]

  @ViewChild('slides') slider!: any;

  constructor() { }

  ngOnInit() {

    const onVolumeButtonPressed = ({ direction }: VolumeButtonPressed) => {
      if (direction === 'up') {
        this.slider.slidePrev();
      } else {
        this.slider.slideNext();
      }
    };

    CapacitorVolumeButtons.addListener('volumeButtonPressed', onVolumeButtonPressed);

    return () => {
      CapacitorVolumeButtons.removeAllListeners();
    };

  }

}
