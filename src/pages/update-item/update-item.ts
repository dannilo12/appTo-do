import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-update-item',
  templateUrl: 'update-item.html',
})
export class UpdateItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
