import { AuthService } from './../../services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';


/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  user: UserModel = new UserModel();
  @ViewChild('form') form: NgForm;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  async forgotPassword(){
    if(this.form.form.valid){
      let toast = this.toastCtrl.create({duration:5000, position:'bottom'});
     try {
       await this.authService.forgotPassword(this.user);
       toast.setMessage('Verifique Sua Caixa De Email');
       toast.present();
     } catch (error) {
      toast.setMessage('Email não Cadastrado!!!');
      toast.present();
     }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

}
