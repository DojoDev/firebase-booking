import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService, private toastCtrl: ToastController){

  }

  async singInOut(){
    let toast = this.toastCtrl.create({ duration: 5000, position: 'bottom' });
    try {
      this.authService.signOut();
      this.navCtrl.setRoot('SinginPage');
      toast.setMessage('Usuário Deslogado com sucesso.');
      toast.present();
    } catch (error) {
      console.error(error);
      toast.setMessage('Algo de Errado ao Deslogar.');
      toast.present();
    }
  
  }

}
