import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rests',
  templateUrl: './rests.page.html',
  styleUrls: ['./rests.page.scss'],
})
export class RestsPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  confirm() {
    return this.modalCtrl.dismiss();
  }

}
