import { UserModel } from './../../models/UserModel';
import { AuthService } from './../../services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the SinginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singin',
  templateUrl: 'singin.html',
})
export class SinginPage {

  user: UserModel = new UserModel();
  @ViewChild('form') form: NgForm;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private toastCtrl: ToastController) {
  }


  async signIn() {
    if (this.form.form.valid) {
      let toast = this.toastCtrl.create({ duration: 5000, position: 'bottom' });
      try {
        await this.authService.signIn(this.user);
        this.navCtrl.setRoot('HomePage');
        toast.setMessage('Usuário Logado Com Sucesso');
        toast.present();
      } catch (error) {
        if (error.code == 'auth/invalid-email') {
          toast.setMessage('O e-mail digitado está inválido.');
        } else if (error.code == 'auth/user-disabled') {
          toast.setMessage('Usuário não habilitado');
        } else if (error.code == 'auth/user-not-found') {
          toast.setMessage('Usuário não encontrado');
        } else if (error.code == 'auth/wrong-password') {
          toast.setMessage('A senha errada');
        }
        toast.present();
      }

    }


  }


  singUp() {
    this.navCtrl.push('SingupPage');
  }

  forgotPassword() {
    this.navCtrl.push('ForgotpasswordPage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinginPage');
  }

}
