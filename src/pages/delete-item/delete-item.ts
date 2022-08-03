import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-delete-item',
  templateUrl: 'delete-item.html',
})
export class DeleteItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  saveItem() {
    let newItem = {
      title: '',
      description: ''
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}