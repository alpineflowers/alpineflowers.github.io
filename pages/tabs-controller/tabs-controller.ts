import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CartTabDefaultPagePage } from '../cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../cloud-tab-default-page/cloud-tab-default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = CartTabDefaultPagePage;
  tab3Root: any = CloudTabDefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
