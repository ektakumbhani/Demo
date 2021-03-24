import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.page.html',
  styleUrls: ['./calculators.page.scss'],
})
export class CalculatorsPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  gomore(){
    this.navCtrl.navigateForward('calculators-more')
  }
}
